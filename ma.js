var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    let url=req["url"];
    console.log("URL = " + req["url"]);
    switch(req.url){
      case "/\&/":
          const client = net.connect("8080", "localhost", () => {
            console.log("つながった");
            client.write("GET / HTTP/1.1\r\n");
            client.write("HOST: localhost\r\n");
            client.write("\r\n");
            console.lpg("match");
            client.on("data", (recieve_data) => {
            console.log(String(recieve_data));
          });
        break;
      default:
          if (string.match(pattern)=="/\$/") {
            const client = net.connect("8080", "localhost", () => {
              console.log("つながった");
              client.write("GET / HTTP/1.1\r\n");
              client.write("HOST: localhost\r\n");
              client.write("\r\n");
              console.lpg("match");
            });
              client.on("data", (recieve_data) => {
              console.log(req.url + String(recieve_data));
              });
            }else {
            try {
              fs.statSync("." + req["url"]);
              let text = fs.readFileSync("." + req["url"]);
              res.write(text);
            } catch (err) {
              res.writeHead(404, { "Content-Type": "text/plain" });
              res.write("404 Not Found");
            }
          }
          break;
      
    }
    
    res.end();
  })
  .listen(8080);
