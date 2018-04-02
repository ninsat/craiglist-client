const craigslist = require('node-craigslist');

// fetch craigslist data by category
const fetchByCategory = (categoryCode, cb) => {
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

// fetch craigslist data by keyword
const fetchBySearch = (keyword, cb) => {
  const client = new craigslist.Client({
    city: 'sfbay',
  });

  client
    .search(keyword)
    .then((listings) => {
      listings.forEach(listing => cb(listing));
    })
    .catch((err) => {
      console.error(err);
    });
};

// fetch craigslist data by category plus details
const fetchDetails = (categoryCode, cb) => {
  const client = new craigslist.Client({
    city: 'sfbay',
  });
  const options = {
    category: categoryCode,
  };

  client
    .search(options)
    .then(listings => client.details(listings[0]))
    .then((details) => {
      cb(details);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports.fetchByCategory = fetchByCategory;
module.exports.fetchBySearch = fetchBySearch;
module.exports.fetchDetails = fetchDetails;
