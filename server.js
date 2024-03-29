const express = require('express')
const app = express()
const PORT = 8000
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const methodOverride = require("method-override")
const flash = require("express-flash")
const logger = require("morgan")
const connectDB = require("./config/database")
const homeRoute = require('./routes/home')
const profileRoute = require('./routes/profile')

require('dotenv').config({path: './config/.env'})

require("./config/passport")(passport);

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(logger("dev"))

app.use(methodOverride("_method"))

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', homeRoute)
app.use('/profile', profileRoute)

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on ${PORT}`)
})