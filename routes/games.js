const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/games')

router.get('/', tasksController.getSearch)

router.get('/search/games', tasksController.getAllGames)

module.exports = router