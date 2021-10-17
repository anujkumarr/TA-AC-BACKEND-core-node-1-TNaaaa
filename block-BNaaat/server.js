let fs = require('fs');
let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/file') {
    fs.readFile('./node.html', (err, content) => {
      if (err) console.log(err);
      res.end(content);
    })
  }
  if (req.method === 'GET' && req.url === '/stream') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./node.html').pipe(res);
  }
}

server.listen(5555, () => {
  console.log("Server is listening on port 5.5k");
})
