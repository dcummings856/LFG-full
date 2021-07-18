const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profile')

router.get('/', profileController.getProfile)
router.delete('/remove/:id', profileController.removeGame)

module.exports = router