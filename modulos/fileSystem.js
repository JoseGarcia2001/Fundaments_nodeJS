const fs = require('fs');

//Leer archivos
const leer = (rute, cb) => {
  fs.readFile(rute, (err, data) =>{
    console.log(data.toString());
  })
};

leer(`${__dirname}/archivo.txt`);


//Escribir archivos
const escribir = (ruta, contenido, cb) => {
  fs.writeFile(ruta, contenido, (err) => {
    err ?
      console.error(err) :
      console.log('Se escribió correctamente');
  });
};

escribir(
  `${__dirname}/archivo1.txt`,
  'Soy un nuevo archivo ejecutado con node'
);


//Borrar Archivos
const borrar = (ruta) => {
  fs.unlink(ruta, (err) => {
    err ?
      console.log(err) :
      console.log('El archivo se borró efectivamente')
  });
};

borrar(`${__dirname}/archivo1.txt`);