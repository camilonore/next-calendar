import { connect } from '../../db'
import Activity from '../../models/Activity'

export default async function handler (req, res) {
  const { method } = req

  await connect()

  switch (method) {
    case 'GET':
      try {
        const activities = await Activity.find({})
        res.status(200).json({ success: true, data: activities })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const activity = await Activity.create(req.body)
        res.status(201).json({ success: true, data: activity })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        const { id } = req.body
        await Activity.deleteOne({ _id: id })
        const activities = await Activity.find({})
        res.status(201).json({ success: true, data: activities })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
