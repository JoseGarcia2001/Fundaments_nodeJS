function saludar(nombre, callback) {
  console.log("Iniciando presentacion");
  setTimeout(() => {
    console.log("Hola!" + nombre);
    callback(nombre)
  }, 1000)
};

function despedir(nombre) {
  setTimeout(() => {
    console.log("Adios "+nombre);
  }, 1000)
};

function hablar(callback) {
  setTimeout(() => {
    console.log("bla bla bla");
    callback()
  }, 1000)
};

//callback Hell

// saludar("Carlos", (nombre) => {
//   hablar(null, () => {
//     hablar(null, () => {
//       hablar(null, () => {
//         despedir(nombre, () => {
//           console.log("terminamos");
//         });
//       })
//     })
//   })
// })

//Usando recursividad.

function conversacion(nombre, veces, callback) {

  if(veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback)
    })
  } else {
    despedir(nombre)
  };
};

saludar("Jose", () => {
  conversacion("Jose", 5, () => {
    console.log("terminar");
  });
})
