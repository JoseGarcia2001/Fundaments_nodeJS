
const suma = () => {
  let numero = 0;
    for (let i = 0; i < 100000000; i++) {
      numero ++
    }
  console.log(numero);
};

console.time("conteo");
  suma()
console.timeEnd('conteo')

const asin = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("empieza");
    }, 1000);
    resolve()
  })
};


console.time("conteo2");
  asin().then(() => {
    console.log('termina');
  })
console.timeEnd('conteo2')