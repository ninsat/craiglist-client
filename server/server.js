const express = require('express');
const bodyParser = require('body-parser');
const craigslist = require('./craigslist/fetcher.js');

const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/../dist/`));
app.use(bodyParser.json());

app.get('/category/:cat', (req, res) => {
  const { cat } = req.params;

  craigslist.fetchBySearch(cat)
    .then((results) => {
      const promises = [];
      results.forEach((result) => {
        const details = craigslist.fetchDetails(result);
        promises.push(details);
      });
      return Promise.all(promises);
    })
    .then(details => res.json(details))
    .catch(err => res.status(404).send(err));
});

app.get('/search/:keyword', (req, res) => {
  const { keyword } = req.params;

  craigslist.fetchByCategory(keyword)
    .then((results) => {
      const promises = [];
      results.forEach((result) => {
        const details = craigslist.fetchDetails(result);
        promises.push(details);
      });
      return Promise.all(promises);
    })
    .then(details => res.json(details))
    .catch(err => res.status(404).send(err));
});

app.listen(port, () => console.log(`CraigsMarket listening on port ${port}!`));

// craigslist.fetchBySearch('toyota camry red')
//   .then((results) => {
//     const promises = [];
//     results.forEach((result) => {
//       const details = craigslist.fetchDetails(result);
//       promises.push(details);
//     });
//     return Promise.all(promises);
//   })
//   .then(details => console.log(details))
//   .catch(err => console.error(err));

// craigslist.fetchByCategory('mca')
//   .then((results) => {
//     const promises = [];
//     results.forEach((result) => {
//       const details = craigslist.fetchDetails(result);
//       promises.push(details);
//     });
//     return Promise.all(promises);
//   })
//   .then(details => console.log(details[0]))
//   .catch(err => console.error(err));
