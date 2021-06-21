const fetch = require('node-fetch')
require('dotenv').config({path: './config/.env'})
let PAGE = 1

module.exports = {
  getHome: async (req, res) => {
    try{
      const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.KEY}`, {
        "method": "GET",
      })
      const games = await response.json()
      // console.log(games)
      res.render('home.ejs', { games: games })
    }catch(err){
      console.log(err)
    }
  },
  getNextPage: async (req, res) => {
    try{
      PAGE++
      // console.log(PAGE)
      const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.KEY}&page=${PAGE}`, {
        "method": "GET",
      })
      const games = await response.json()
      // console.log(games)
      res.render('home.ejs', { games: games })
    }catch(err){
      console.log(err)
    }
  },
  getPrevPage: async (req, res) => {
    try{
      if (PAGE == 1){
        PAGE = 1
      } else {
        PAGE--
      }
      // console.log(PAGE)
      const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.KEY}&page=${PAGE}`, {
        "method": "GET",
      })
      const games = await response.json()
      // console.log(games)
      res.render('home.ejs', { games: games })
    }catch(err){
      console.log(err)
    }
  },
  getGameInfo: async (req, res) => {
    try{
      const gameID = req.params.gameID
      console.log(gameID)
      const response = await fetch(`https://api.rawg.io/api/games/${gameID}?key=${process.env.KEY}`, {
        "method": "GET",
      })
      const game = await response.json()
      // console.log(game)
      res.render('info.ejs', { game: game })
    }catch(err){
      console.log(err)
    }
  },
}