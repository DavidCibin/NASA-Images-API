export function getNasaPics() {
  return fetch('/api/nasa-mars')
    .then(res => res.json())
}

// export function getDailyPics() {
//   return fetch('/api/nasa-daily')
//     .then(res => res.json())
// }

export function getDailyPics() {
  return fetch('/api/nasa-daily')
    .then(res => {
      if (!res.ok) {
        console.log(res, " res res");
        throw new Error(res, 'Network response was not ok');
      }
      return res.json();
    })
    .then(jsonData => {
      console.log('JSON Data:', jsonData); // Log the JSON object
      return jsonData; // Return the JSON data for further processing if needed
    })
    .catch(error => {
      console.error('Error:', error);
      throw error; // Rethrow the error for further handling
    });
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
