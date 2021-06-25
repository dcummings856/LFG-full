const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getHome)
router.get('/nextPage', homeController.getNextPage)
router.get('/prevPage', homeController.getPrevPage)
router.get('/gameinfo/:gameID', homeController.getGameInfo)


module.exports = router