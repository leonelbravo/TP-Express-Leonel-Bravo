const express = require('express')
const routes = express.Router()

const modelosControl= require('../controllers/marcasControl');

routes.get('/', modelosControl.index)

module.exports = routes;