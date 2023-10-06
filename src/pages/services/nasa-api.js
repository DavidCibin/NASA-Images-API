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

// using GET
export function getMyDate(date) {
  return fetch(`/api/nasa-mydate/${date}`)
    .then(res => res.json())
}

// using POST
// export function getMyDate(date) {
//   return fetch(`/api/nasa-mydate/`, {
//     method: 'POST',
//     body: JSON.stringify(date)
//   })
//     .then(res => res.json())
// }
