import { connect } from '../../db'
import Activity from '../../models/Activity'
import { responseSuccess, responseError } from '../../utils/response'

export default async function handler (req, res) {
  const { method } = req

  await connect()

  switch (method) {
    case 'GET':
      try {
        const activities = await Activity.find({})
        responseSuccess(res, activities, 200)
      } catch (error) {
        responseError(res, 400, error)
      }
      break
    case 'POST':
      try {
        const activity = await Activity.create(req.body)
        responseSuccess(res, activity, 201)
      } catch (error) {
        responseError(res, 400, error)
      }
      break
    case 'DELETE':
      try {
        const { id } = req.body
        await Activity.deleteOne({ _id: id })
        const activities = await Activity.find({})
        responseSuccess(res, activities, 201)
      } catch (error) {
        responseError(res, 400, error)
      }
      break
    case 'PATCH':
      try {
        const { id, day, type, hour, description } = req.body
        const foundActivity = await Activity.findById(id)

        if (day) foundActivity.day = day
        if (type) foundActivity.type = type
        if (hour) foundActivity.hour = hour
        if (description) foundActivity.description = description
        await foundActivity.save()

        const activities = await Activity.find({})
        responseSuccess(res, activities, 201)
      } catch (error) {
        responseError(res, 400, error)
      }
      break
    default:
      responseError(res, 400, 'Unexpected error')
      break
  }
}
