import { postData } from '../utils/postData'

const usePOST = async ({ event, fields, isTask }) => {
  const body = {}
  const url = isTask ? 'api/activities' : 'api/objectives'
  fields.forEach(field => {
    body[field.name] = event.target[field.name].value
  })

  const response = await postData(url, body)
  fields.forEach(field => {
    event.target[field.name].value = ''
  })
  return response
}

export { usePOST }
