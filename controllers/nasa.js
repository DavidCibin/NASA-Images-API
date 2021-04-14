const axios = require('axios')
module.exports = { 
  nasa
};

async function nasa(req, res) {

  // return fetch('/api/nasa')
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_API_KEY_NASA}`)
    .then(response => res.json(response.data))

}
