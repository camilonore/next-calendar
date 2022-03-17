import { patchData } from '../utils/reqMethods'

const usePATCH = async ({ event, fields, isActivity, editObjectId }) => {
  const body = {
    id: editObjectId
  }
  const url = isActivity ? 'api/activities' : 'api/objectives'
  fields.forEach(field => {
    body[field.name] = event.target[field.name].value
  })

  console.log(body)
  const response = await patchData(url, body)
  fields.forEach(field => {
    event.target[field.name].value = ''
  })
  return response
}

export { usePATCH }
