import craigslist from 'node-craigslist';

const fetch = (categoryCode, cb) => {
  const client = new craigslist.Client({
    city: 'sfbay',
  });
  const options = {
    category: categoryCode,
  };

  client
    .search(options)
    .then((listings) => {
      listings.forEach(listing => cb(listing));
    })
    .catch((err) => {
      console.error(err);
    });
};

fetch('cta', result => console.log(result));

export default fetch;

// const craigslist = require('node-craigslist');

// const client = new craigslist.Client({
//   city: 'sfbay',
// });
// const options = {
//   category: 'cta',
// };

// client
//   .search(options)
//   .then(listings => client.details(listings.forEach(listing => listing)))
//   .then((details) => {
//     console.log(details);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
