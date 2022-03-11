const deleteData = (objectId, url) => {
  const body = { id: objectId }
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((res) => res.json())
    .then((data) => data)
}

export { deleteData }
