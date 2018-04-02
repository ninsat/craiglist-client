const express = require('express');
const bodyParser = require('body-parser');
const craigslist = require('./craigslist/fetcher.js');

const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/../dist/`));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
// });

app.listen(port, () => console.log(`CraigsMarket listening on port ${port}!`));


craigslist.fetchByCategory('cta', result =>
  console.log('data', result));


// craigslist.fetchByCategory('toyota', result =>
//   console.log('data', result));

// craigslist.fetchDetails('mca', result =>
//   console.log('data', result));
