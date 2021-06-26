const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const authController = require('../controllers/auth')

router.get('/', homeController.getHome)
router.get('/nextPage', homeController.getNextPage)
router.get('/prevPage', homeController.getPrevPage)
router.get('/info/:gameID', homeController.getGameInfo)

router.get("/login", authController.getLogin)
router.post("/login", authController.postLogin)


module.exports = router