const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/profile')

router.get('/', tasksController.getProfile)

module.exports = router