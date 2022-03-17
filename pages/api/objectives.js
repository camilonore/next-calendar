import { connect } from '../../db'
import Objective from '../../models/Objective'
import { responseSuccess, responseError } from '../../utils/response'

export default async function handler (req, res) {
  const { method } = req
  await connect()

  switch (method) {
    case 'GET':
      try {
        const objectives = await Objective.find({})
        responseSuccess(res, objectives, 200)
      } catch (error) {
        responseError(res, 400, error)
      }
      break
    case 'POST':
      try {
        const objective = await Objective.create(req.body)
        responseSuccess(res, objective, 201)
      } catch (error) {
        responseError(res, 400, error)
      }
      break
    case 'DELETE':
      try {
        const { id } = req.body
        await Objective.deleteOne({ _id: id })
        const objectives = await Objective.find({})
        responseSuccess(res, objectives, 200)
      } catch (error) {
        responseError(res, 400, error)
      }
      break
    case 'PATCH':
      try {
        const { id } = req.body
        const { objective } = req.body
        const foundObjective = await Objective.findById(id)

        foundObjective.objective = objective
        await foundObjective.save()
        const objectives = await Objective.find({})
        responseSuccess(res, objectives, 200)
      } catch (error) {
        responseError(res, 400, error)
      }
      break
    default:
      responseError(res, 400, 'Unexpected error')
      break
  }
}
