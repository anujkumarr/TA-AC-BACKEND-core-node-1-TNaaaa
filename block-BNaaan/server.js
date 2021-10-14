
let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.headers, req.method,  req.url);
  res.end("Welcome");
}

server.listen(3001, () =>{
  console.log("Requested from 3001 localhost");
})
