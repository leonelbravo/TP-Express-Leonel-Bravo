const fs = require('fs')
const leer = require('../leerJSON')
const homeControl = {
    index: (req, res) => {
       let locales = []
       leer.forEach(dato =>{
        locales.push(dato.sucursal)
       })
        locales = locales.join('<br >')
        res.send(`Bienvenido a nuestra pagina: sucursales disponibles son:<br > <br >${locales}` )
    }

}

module.exports = homeControl;