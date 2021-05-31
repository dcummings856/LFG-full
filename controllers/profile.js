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
      let games = await fetch("https://game-info-api.herokuapp.com/api/games")
      
    }catch(err){
      console.log(err)
    }
  }
}