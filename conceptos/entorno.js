let nombre = process.env.NOMBRE || 'Sin nombre';
let apellido = process.env.APELLIDO || 'sin apellidos';

console.log(`Hola! ${nombre} ${apellido}`);
console.log("Estoyusando nodemon");