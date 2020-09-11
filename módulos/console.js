console.log('algo'); //Para pintar cosas en consola

console.info('algo'); //para pasar información como si fué excitoso un procesos

console.error('algo'); //para pintar errores usualmente de color rojo

console.warn('algo'); //para pintar cosas posiblemente peligrosas/warnings

const table = [
{
  a: 1,
  b: 2,

},
{
  c: 3,
  d: 4,
}
]
console.table(table); //para hacer logs de arrays y para que los datos grandes se vean mejor

console.group(''); //Podemos agrupar logs con un nivel de identación para poder identificar cosa por cosa.
console.groupEnd('');//Terminar la agrupación de los logs

//para crear contadores
console.count('intento')
console.count('intento')
console.count('intento')
console.countReset('intento')
console.count('intento')
