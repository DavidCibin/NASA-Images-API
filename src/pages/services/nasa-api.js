export function getNasaPics() {
  return fetch('/api/nasa-mars')
    .then(res => res.json())
}


export function getDailyPics() {
  return fetch('/api/nasa-daily')
    .then(res => res.json())
}

export function getRandomPic() {
  return fetch('/api/')
    .then(res => res.json())
}

// const start = new Date(1995, 6, 16)
// const end = new Date()
// function randomDate(start, end) {
//   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
// }
// const randDate = randomDate(start, end).toISOString().slice(0, 10)


// export function getDailyPics() {
//   return fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}`)
//     .then(res => res.json())
// }

// export function getRandomPic() {
//   return fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}&date=${randDate}`)
//     .then(res => res.json())
// }

