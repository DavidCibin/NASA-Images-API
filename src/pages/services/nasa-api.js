export function getNasaPics() {
  return fetch('/api/nasa-mars')
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  });
}

// export function getDailyPics() {
//   return fetch('/api/nasa-daily')
//   .then(res => {
//     if (!res.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return res.json();
//   });
// }

export function getDailyPics() {
  return fetch('/api/nasa-daily')
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    });
}


export function getRandomPic() {
  return fetch('/api/')
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  });
}

// using GET
export function getMyDate(date) {
  return fetch(`/api/nasa-mydate/${date}`)
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  });
}

// using POST
// export function getMyDate(date) {
//   return fetch(`/api/nasa-mydate/`, {
//     method: 'POST',
//     body: JSON.stringify(date)
//   })
//   .then(res => {
//     if (!res.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return res.json();
//   });
// }
