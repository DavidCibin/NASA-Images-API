const axios = require('axios')
module.exports = {
  nasaMars,
  nasaDaily,
  nasaRandom,
  myDate,  // using GET
  // myDatePost      // using POST
}


// using GET
async function myDate(req, res) {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}&date=${req.params.date}`)
    .then(response => res.json(response.data))
}

// using POST
// async function myDatePost(req, res) {
//   axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}&date=${req.body.date}`)
//     .then(response => res.json(response.data))
// }


const start = new Date(1995, 6, 16)
const end = new Date()
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
async function nasaRandom(req, res) {
  // console.log(res)
  const randDate = randomDate(start, end).toISOString().slice(0, 10)
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}&date=${randDate}`)
    .then(response => res.json(response.data))
}

async function nasaDaily(req, res) {
  // return fetch('/api/nasa')
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}`)
    .then(response => res.json(response.data))
}


async function nasaMars(req, res) {
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_API_KEY_NASA}`)
    .then(response => res.json(response.data))
}