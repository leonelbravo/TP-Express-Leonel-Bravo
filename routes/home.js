const express = require('express')
const routes = express.Router()

const homeControl = require('../controllers/homeControl')

routes.get('/', homeControl.index)

module.exports = routes;
