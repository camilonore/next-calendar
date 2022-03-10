import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mySchema = new Schema({
  activity: {
    day: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    hour: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
})

const model = mongoose.models.Activity || mongoose.model('Activity', mySchema)

export default model
