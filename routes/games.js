const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/games')

router.get('/', tasksController.getSearch)

module.exports = router