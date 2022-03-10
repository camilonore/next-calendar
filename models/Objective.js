import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mySchema = new Schema({
  objective: {
    type: String,
    required: true
  }
})

const model = mongoose.models.Objective || mongoose.model('Objective', mySchema)

export default model
