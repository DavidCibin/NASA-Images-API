const axios = require('axios')
module.exports = {
  // nasa,
  nasaMars,
  nasaDaily,
  nasaRandom
};


// async function nasa(req, res) {
//   // return fetch('/api/nasa')
//   axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_API_KEY_NASA}`)
//     .then(response => res.json(response.data))
// }

async function nasaMars(req, res) {
  // return fetch('/api/nasa')
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_API_KEY_NASA}`)
    .then(response => res.json(response.data))
  // console.log(nasaMars(), 'nasaMars response')
}


// async function nasaDaily(req, res) {
//   // return fetch('/api/nasa')
//   axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}&date=${randDate}`)
//   axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}`)
//     .then(response => res.json(response.data))
//     // .then(response => res.json(response.data))
//   // console.log(nasaDaily(), 'nasaDaily response')
// }

const start = new Date(1995, 6, 16)
const end = new Date()
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
const randDate = randomDate(start, end).toISOString().slice(0, 10)
console.log(randDate, 'dandom date')

async function nasaRandom(req, res) {
  // return fetch('/api/nasa')
  // randomDate()
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}&date=${randDate}`)
    .then(r => res.json(r.data))
  // console.log(nasaRandom(), 'nasaRandom response')
}

async function nasaDaily(req, res) {
  // return fetch('/api/nasa')
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}`)
    .then(response => res.json(response.data))
  // console.log(nasaDaily(), 'nasaDaily response')
}

// export function getRandomPic() {
//   return fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}&date=${randDate}`)
//     .then(res => res.json())
// }


// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-07-08