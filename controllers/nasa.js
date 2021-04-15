const axios = require('axios')
module.exports = { 
  nasa,
  // nasaMars,
  // nasaDaily
};


async function nasa(req, res) {
  // return fetch('/api/nasa')
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_API_KEY_NASA}`)
    .then(response => res.json(response.data))
}

// async function nasaMars(req, res) {
//   // return fetch('/api/nasa')
//   axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_API_KEY_NASA}`)
//     .then(response => res.json(response.data))
//     // console.log(nasaMars(), 'nasaMars response')
// }

// async function nasaDaily(req, res) {
//   // return fetch('/api/nasa')
//   axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}`)
//     .then(response => res.json(response.data))
//     // console.log(nasaDaily(), 'nasaDaily response')
// }



// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-07-08