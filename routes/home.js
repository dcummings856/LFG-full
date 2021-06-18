const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/home')

router.get('/', tasksController.getHome)
router.get('/nextPage', tasksController.getNextPage)
router.get('/prevPage', tasksController.getPrevPage)


module.exports = router