const request = require('request');

const breed = process.argv.slice(2);
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(URL, (error, response, body) => {
  
  if (error) {
    console.log('Request failed. Check URL submitted.');
    process.exit();
  }

  if (!error) {
    const data = JSON.parse(body);
    if (!data.length) {
      console.log(`The breed name requested: "${breed}", does not exist.`);
    }
    if (data.length) {
      console.log(data[0].description);
    }
  }
});

//console.log('type', typeof data);