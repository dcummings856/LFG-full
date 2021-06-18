const fetch = require('node-fetch')
require('dotenv').config({path: './config/.env'})

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
      let PAGE = 1
      PAGE++
      console.log(PAGE)
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
      let PAGE = 2
      PAGE--
      console.log(PAGE)
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
}