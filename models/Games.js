const mongoose = require('mongoose')

const GamesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
  },
  year: {
    type: Number,
  },
  platforms: {
    type: Array
  }
})

module.exports = mongoose.model("Games", GamesSchema)