const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/home')

router.get('/', tasksController.getIndex)

module.exports = router