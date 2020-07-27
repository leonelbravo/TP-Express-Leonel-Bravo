const fs = require('fs')
const leer = require('../leerJSON')
const SucursalesControl = {
    index: (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
       let local = []
       let telefono = []
       let direccion = []
       leer.forEach(dato =>{
        local.push("Local: " + dato.sucursal + "\nDireccion: " + dato.direccion + "\nTelefono: " + dato.telefono + "\n\n")
        })
         res.write("Bienvenido a nuestra pagina \nsucursales disponibles son: " + direccion + "\n\n" + local + "\n\n" + telefono + "\n\n")
         res.end()
    },
    store: (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        let sucursales = []
        leer.forEach(local => {
                    if(req.params.idSucursal == local.sucursal) {
                    sucursales.push(local.sucursal, local.direccion, local.telefono, local.autos)
                    let sucursal = sucursales[0]
                    let direccion = sucursales[1]
                    let telefono = sucursales[2]
                    let vehiculo = sucursales[3] 
                    res.write("Local: " + sucursal)
                    res.write("\nDireccion: " + direccion)
                    res.write("\nTelefono: " + telefono + "\n\nCantidad de vehiculos en la sucursal: " + sucursales[3].length + "\n\nVehiculos: \n\n")
                    vehiculo.forEach(dato =>{
                              res.write("Marca: " + dato.marca + " \nModelo: " + dato.modelo + " \nAño: " + dato.anio + "\nColor: " + dato.color + "\n\n")
                    })  
                    res.end()
                }
            })
        res.send("Sucursal Inexistente")
    }
}
module.exports = SucursalesControl;

