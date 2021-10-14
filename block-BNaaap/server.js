let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.writeHead(201, { 'Content-type': 'text/html' });
  res.end('<h1>Hello world</h1>');
}

server.listen(4444, () => {
  console.log('Doing request from postman');
});
