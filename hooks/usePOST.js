import { postData } from '../utils/reqMethods'

const usePOST = async ({ event, fields, isActivity }) => {
  const body = {}
  const url = isActivity ? 'api/activities' : 'api/objectives'
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
