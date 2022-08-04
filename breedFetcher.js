const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  
  request(URL, (error, response, body) => {
  
    if (error) {
      error = 'Request failed. Check URL submitted.';
      callback(error, null);
    }

    if (!error) {
      const data = JSON.parse(body);
      if (!data.length) {
        error = `The breed name requested "${breed}", does not exist/ invalid.`;
        callback(error, null);
      }
      if (data.length) {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };


//console.log('type', typeof data); => object after JSON.parse().