const http = require("http");

const PORT = 3000;
http
  .createServer((req, res) => {
    res.write("hello World"); //writes text on document
  })
  .listen("3000"); // Port where server is running

console.log(`server is running on PORT ${PORT}`);
