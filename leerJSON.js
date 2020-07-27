let fs = require('fs')
let archivo = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

module.exports = archivo

