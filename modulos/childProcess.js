const { spawn, exec } = require('child_process');

// exec('node módulos/console.js ', (error, stdout, stderr) => {
//   if(error) {
//     console.error(error.message);
//     return
//   }
// })

//   console.log(stdout);

let proceso = spawn('ls', ['-ltr'])

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (output) => {
  console.log(output.toString());
});

proceso.on('exit', () => {
  console.log('terminada la wea');
});