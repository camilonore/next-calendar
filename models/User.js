import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mySchema = new Schema({
  email: String,
  password: String
})

const model = mongoose.models.User || mongoose.model('User', mySchema)

export default model
