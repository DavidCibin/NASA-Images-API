export function getNasaPics() {

  // return fetch('/api/nasa')
  return fetch('/api/nasa')
    .then(res => res.json())
}
