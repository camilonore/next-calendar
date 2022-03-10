import mongoose from 'mongoose'
import { config } from './config/index'

mongoose.Promise = global.Promise

const USER = config.dbUser
const PASSWORD = config.dbPassword
const HOST = config.dbHost
const NAME = config.dbName
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${NAME}?retryWrites=true&w=majority`

async function connect () {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true
  })
  console.log('[db] Conectada con exito')
}

export { connect }
