const http = require('http');

const router = (req, res) => {

  switch (req.url) {
    case '/Hola':
      console.log(req.url);
      console.log(req);
      res.write('Holi :D')
      res.end();
      break;
    default:
      res.write('ai don nou')
      res.end()
  };
};

//   console.log('Nueva petición');
//   console.log(req.url);

//   res.write('Hola que tal! :D')

//   res.writeHead(201, { 'Content-Type': 'text/plain' })

//   res.end();
// };

http.createServer(router).listen(3000)