const express = require('express')
const routes = express.Router()

const SucursalesControl = require('../controllers/sucursalesControl')

routes.get('/', SucursalesControl.index)
routes.get('/:idSucursal?',SucursalesControl.store)

module.exports = routes;