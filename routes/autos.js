const express = require('express')
const routes = express.Router()

const autosController = require('../controllers/autoControl')

routes.get('/', autosController.index)
//routes.get('/:idSucursal?',autosController.store)

module.exports = routes;