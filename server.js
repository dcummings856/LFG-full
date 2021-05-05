const express = require('express')
const app = express()
const homeRoute = require('./routes/home')
const gamesRoute = require('./routes/games')
const profileRoute = require('./routes/profile')

require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoute)
app.use('/search', gamesRoute)
app.use('/profile', profileRoute)

app.listen(process.env.PORT, () => {
  console.log('server running')
})