var http = require('http');
var url = require('url');
var fs = require('fs');
const path = require('path');
let ind = path.join(__dirname, '../', '../', 'index.html');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('../../index.html').pipe(res);
  }
  if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('../../about.html').pipe(res);
  }
   if (req.url.split('.').pop() === 'css') {
     // set header for css file
     res.setHeader('Content-Type', 'text/css');
     // read css file and send it in response
     fs.readFile('./assets/stylesheets/' + req.url, (err, content) => {
       if (err) return console.log(err);
       res.end(content);
     });
   }
}

server.listen(3002, () => {
  console.log('Server is listening at 3002');
});
