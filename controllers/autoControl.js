const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync(__dirname + '/../data/concesionarias.json', 'utf-8'));
const autosController = {
    
index: function(req, res){
  res.set({ 'content-type': 'text/plain; charset=utf-8' });
  res.write("Estos son los autos regristrados en todas nuestras sucursales"+ '\n');
  res.write('\n'); 
  concesionarias.forEach(concesionaria => {
    res.write("Sucursal: "+ '\n');  
    res.write('\n');
      res.write(concesionaria.sucursal +'\n'); 
      res.write('\n');    
      concesionaria.autos.forEach (auto =>{
      res.write('Marca: '+auto.marca +'\n Modelo: '+auto.modelo);
      res.write('\n');       
      });
    });
    res.end()
  }
}
module.exports = autosController;