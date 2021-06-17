const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/home')

router.get('/', tasksController.getHome)
router.get('/page', tasksController.getNextPage)


module.exports = router