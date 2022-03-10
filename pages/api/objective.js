import { connect } from '../../db'
import Objective from '../../models/Objective'

export default async function handler (req, res) {
  const { method } = req

  await connect()

  switch (method) {
    case 'GET':
      try {
        const objectives = await Objective.find({})
        res.status(200).json({ success: true, data: objectives })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const objective = await Objective.create(req.body)
        res.status(201).json({ success: true, data: objective })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
