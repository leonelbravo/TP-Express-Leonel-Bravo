const express = require('express');
const app = express()
const fs = require('fs')

app.listen(3030, () => console.log('Server running in localhost:3030 port'));

const rutasHome = require('./routes/home.js')
const rutasSucursales = require('./routes/sucursales')
const rutasAutos = require('./routes/autos')
const rutasMarcas = require('./routes/marcas')

app.use('/', rutasHome)
app.use('/Sucursales', rutasSucursales)
app.use('/autos', rutasAutos)
app.use('/marcas', rutasMarcas)
