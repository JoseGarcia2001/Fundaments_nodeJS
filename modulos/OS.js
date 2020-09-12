const os = require('os');

//Para ver la arquitectura
console.log(os.arch());

//Para ver la plataforma
console.log(os.platform());

//Para ver la info de las cpus
console.table(os.cpus());

//Para ver los errores del sistema
console.log(os.constants);

//Para ver la memoria libre y memoria total
console.log(os.totalmem() / 1024 / 1024 / 1024);
console.log(os.freemem() / 1024 / 1024 / 1024);

//Para ver directorio raiz del usuario
console.log(os.homedir());

//Para ver la carpeta temporal
console.log(os.tmpdir());

//Para ver el hostname de la máquina
console.log(os.hostname());

//Para ver la intefaz de red
console.log(os.networkInterfaces());






