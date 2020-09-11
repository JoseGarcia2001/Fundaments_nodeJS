function saludar(nombre) {
  return new Promise((resolve, reject) => {
    console.log("Iniciando presentacion");
    setTimeout(() => {
      console.log("Hola!" + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla");
      resolve(nombre);
    }, 1000);
  });
}

function despedir(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

async function conversacion() {
  const name = "Jose"
  await saludar(name)
  await hablar(name)
  await hablar(name)
  await despedir(name)
};

conversacion()