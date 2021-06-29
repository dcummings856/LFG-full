const fetch = require('node-fetch')
const GamesList = require('../models/GamesList')

module.exports = {
  getProfile: async (req, res) => {
    try{
      const list = await GamesList.find({ user: req.user.id })
      // const response = await fetch("https://api.rawg.io/api/games?key=2616f5758f784d868c63a14aa6ad4f69", {
      //   "method": "GET",
      // })
      // const games = await response.json()
      // console.log(games)
      res.render('profile.ejs', { list: list, user: req.user })
    }catch(err){
      console.log(err)
    }
  },
}