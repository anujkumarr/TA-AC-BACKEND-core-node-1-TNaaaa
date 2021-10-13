var fs = require("fs");

console.log("Anuj Kumar");

setTimeout(() => console.log("Node"), 2000);

fs.readFile("./content.md", (err, content) => {
  console.log(err, content.toString());
})


let buff1 = Buffer.alloc(10);
buff1.write("Welcome to Buffer");

console.log(buff1.toString());