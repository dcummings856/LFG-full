const express = require('express')
const app = express()
const homeRoute = require('./routes/home')
const gamesRoute = require('./routes/games')

require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')

app.use('/', homeRoute)

app.use('/search', gamesRoute)

app.listen(process.env.PORT, () => {
  console.log('server running')
})