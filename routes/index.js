var express = require('express')
var router = express.Router()

const Exemple = require('../models/exemple')

const uid2 = require('uid2')
const bcrypt = require('bcrypt')

const { checkBody } = require('../modules/checkBody')
const { checkIdFormat } = require('../modules/checkIdFormat')
const { cleanSpace } = require('../modules/cleanSpace')

module.exports = router
