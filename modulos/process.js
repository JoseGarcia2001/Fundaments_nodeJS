process.on('beforeExit', () => {
  console.log('el Proceso casi termina ');
});

process.on('exit', () => {
  console.log('el Proceso terminó');
});

process.on('uncaughtException', (error, origen) => {
  console.log('oh, hemos detectado un error que no fué capturado');
  console.log(error.message);
});

holi()