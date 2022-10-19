const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text-html" });
      let html = fs.readFileSync(__dirname + "/index.html", "utf-8");
      res.end(html);
    } else if (req.url === "/api") {
      let obj = {
        nombre: "Juan",
        apellido: "Perez",
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(obj));
    } else {
      res.writeHead(404, { "Content-Type": "text-plain" });
      res.end("404 Error, not found");
    }
  })
  .listen(3001, "localhost");
