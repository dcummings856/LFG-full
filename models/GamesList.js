const mongoose = require('mongoose')

const GamesListSchema = new mongoose.Schema({
  game: {
    type: String,
    required: true,
  },
  microsoftId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('GameList', GamesListSchema)