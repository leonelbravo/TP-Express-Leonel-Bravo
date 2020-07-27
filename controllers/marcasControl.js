const fs = require('fs')
const leer = require('../leerJSON')
const modelosControl = {
    index: (req, res) => {
        let marcaMostrar = [];
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Marcas automotrices afiliadas: "+ '\n\n');
            leer.forEach(marcas=>{
            marcas.autos.forEach(marcas=>{
                marcaMostrar.push(marcas.marca)
            })
        }),
        marcaMostrar = marcaMostrar.filter((uno, dos) =>marcaMostrar.indexOf(uno) === dos),
        marcaMostrar.forEach(marcas=>{
            res.write('----------> ' + marcas +"\n\n")
        }),
        res.end()
    }
}
module.exports = modelosControl;




























