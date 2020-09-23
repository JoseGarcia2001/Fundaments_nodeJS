const prueba = setTimeout(() => {
  console.log("hola");
}, 1000)

clearTimeout(prueba)
global.i = 0

let interval = setInterval(function () {
  console.log("holi");
  if(i === 3) {
    clearInterval(interval)
  };
  i++;
}, 1000);

console.log(process);
console.log(__dirname);
console.log(__filename);

global.saludo = 'holaa'

console.log(saludo);