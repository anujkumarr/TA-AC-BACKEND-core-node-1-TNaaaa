let http = require("http");



let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req, res);
  res.end("Welcome to the basic server")
}

server.listen(4000, () => {
  console.log("Server listening on port 4000");
})