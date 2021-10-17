var http = require('http');

var fs = require('fs');

var url = require('url');

// var server = http.createServer(handleRequest);

// function handleRequest(req, res){
//   console.log(req, "request");
//   console.log(res, "response");
//   res.end();
// }

// server.listen(5000, () => {
//   console.log("Listening at 5k port");
// })



// var http2 = require('http');

// var server2 = http2.createServer(handleRequest);

// function handleRequest(req, res) {
//   res.end("My first server in NodeJS")
// }

// server2.listen(5100, () => {
//   console.log("Listening at 5.1k port");
// })



// var http3 = require('http');

// var server3 = http3.createServer(handleRequest);

// function handleRequest(req, res) {
//   console.log(req.headers, "headers");
//   res.end(req.headers['user-agent'])
// }

// server3.listen(5500, () => {
//   console.log("Listening at 5.5k port");
// })



// var http4 = require('http');

// var server4 = http4.createServer(handleRequest);

// function handleRequest(req, res) {
//   console.log(req.url, 'URL');
//   console.log(req.method, 'Method');
//   let data = 'url= ' + req.url + ', method= ' + req.method;
//   res.end(data);
// }

// server4.listen(5566, () => {
//   console.log('Listening at 5566 port');
// });



// var http5 = require('http');

// var server5 = http5.createServer(handleRequest);

// function handleRequest(req, res) {
//   let data = req.headers;
//   res.end(JSON.stringify(data));
// }

// server5.listen(7000, () => {
//   console.log('Listening at 7k port');
// });



// var http6 = require('http');

// var server6 = http6.createServer(handleRequest);

// function handleRequest(req, res) {
//   res.statusCode = 202;
//   res.end();
// }

// server6.listen(3333, () => {
//   console.log('Listening at 3333 port');
// });



// var http7 = require('http');

// var server7 = http7.createServer(handleRequest);

// function handleRequest(req, res) {
//   res.writeHead(202, { 'Content-Type': 'text/html'});
//   res.end('<h3>Welcome to altcampus</h3>');
// }

// server7.listen(8000, () => {
//   console.log('Listening at 8000 port');
// });



// var http8 = require('http');

// var server8 = http8.createServer(handleRequest);

// function handleRequest(req, res) {
//   res.writeHead(202, { 'Content-Type': 'text/json'});
//   res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}));
// }

// server8.listen(8888, () => {
//   console.log('Listening at 8888 port');
// });



// var http9 = require('http');

// var server9 = http9.createServer(handleRequest);

// function handleRequest(req, res) {
//   if (req.method === 'POST' && req.url === '/index') {
//     res.writeHead(202, { 'Content-Type': 'text/html' });
//     res.end('<h2>posted for first time</h2>');   
//   }
// }

// server9.listen(5050, () => {
//   console.log('Listening at 5050 port');
// });



// var http10 = require('http');

// var server10 = http10.createServer(handleRequest);

// function handleRequest(req, res) {
//   if (req.method === 'GET' && req.url === '/') {
//     res.writeHead(202, { 'Content-Type': 'text/plain' });
//     res.end('Anuj Kumar');   
//   } else if (req.method === 'GET' && req.url === '/about') {
//     res.writeHead(202, { 'Content-Type': 'text/html' });
//     res.end('<h2>Anuj Kumar</h2>');  
//   } else {
//     res.statusCode = 404;
//     res.end();
//   }
// }

// server10.listen(2345, () => {
//   console.log('Listening at 2345 port');
// });



// var http11 = require('http');

// var server11 = http11.createServer(handleRequest);

// function handleRequest(req, res) {
//   if (req.method === 'GET' && req.url === '/users') {
//     res.writeHead(202, { 'Content-Type': 'text/html' });
//     res.end('<form> <label>Anuj Kumar</label>  <input type="text" placeholder = "Enter your email"></form>');
//   } else if (req.method === 'POST' && req.url === '/users') {
//     res.end('Posted for the second time');
//   } else {
//     res.statusCode = 404;
//     res.end();
//   }
// }

// server11.listen(2345, () => {
//   console.log('Listening at 2345 port');
// });

//


var http12 = require('http');


var server12 = http12.createServer(handleRequest);

function handleRequest(req, res) {
  var parsedUrl = url.parse(req.url, true);
  var pathName = parsedUrl.pathName;
  console.log(pathName);
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(parsedUrl.query));
}

server12.listen(3000, () => {
  console.log('Listening at 3000 port');
});



