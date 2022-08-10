var mongoose = require('mongoose')
let mongoUrl = process.env.MONGO_DB_STRING

function initMongo() {
  mongoose.connect(mongoUrl, {})
  console.log(mongoUrl)

  console.log('MongoDB connected')
}

module.exports = initMongo
