export function getNasaPics() {

  // return fetch('/api/nasa')
  return fetch('/api/nasa')
    .then(res => res.json())
}


export function getDailyPics() {
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}`)
  .then(res => res.json())
}

