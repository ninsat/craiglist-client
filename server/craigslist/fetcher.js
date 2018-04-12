const craigslist = require('node-craigslist');

// fetch craigslist data by category
const fetchByCategory = (categoryCode) => {
  const client = new craigslist.Client({
    city: 'sfbay',
  });
  const options = {
    category: categoryCode,
  };
  return client
    .search(options);
};

// fetch craigslist data by keyword
const fetchBySearch = (keyword) => {
  const client = new craigslist.Client({
    city: 'sfbay',
  });
  return client
    .search(keyword);
};

// fetch craigslist data by category plus details
const fetchDetails = ({ url }) => {
  const client = new craigslist.Client({
    city: 'sfbay',
  });
  return client.details(url);
};

module.exports.fetchByCategory = fetchByCategory;
module.exports.fetchBySearch = fetchBySearch;
module.exports.fetchDetails = fetchDetails;
