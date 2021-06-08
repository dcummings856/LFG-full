const fetch = require('node-fetch')

module.exports = {
  getProfile: async (req, res) => {
    try{
      res.render('profile.ejs')
    }catch(err){
      console.log(err)
    }
  },
  searchGames: async (req, res) => {
    try{
      fetch("https://game-info-api.herokuapp.com/api/games")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      res.redirect('/profile')
    }catch(err){
      console.log(err)
    }
  }
}