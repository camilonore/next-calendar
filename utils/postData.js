function postData (url, body) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((res) => res.json())
    .then((data) => data)
}
function patchData (url, body) {
  return fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((res) => res.json())
    .then((data) => data)
}
export { postData, patchData }
