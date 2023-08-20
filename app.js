require('dotenv').config()
require('./config/config')

var path = require('path')

var express = require('express')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var app = express()

// cors debut
const cors = require('cors')
// changer * par les urls du frontend une fois déployé, séparé par des virgule possible aussi d'ajouter sont ip
const allowedOrigins = ['*']
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Pas autorisé 🫣'))
    }
  },
  credentials: true
}
// si vous souhaitez qu'il soit disponible à tout le monde
// const corsOptions = {
//   origin: function (origin, callback) {
//     callback(null, true)
//   },
//   credentials: true
// }
app.use(cors(corsOptions))
// cors fin

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


// routes
var indexRouter = require('./routes/index')
app.use('/', indexRouter)


module.exports = app
