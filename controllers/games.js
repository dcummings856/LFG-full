module.exports = {
  getSearch: async (req, res) => {
    try{
      res.render('games.ejs')
    }catch(err){
      console.log(err)
    }
  },
}