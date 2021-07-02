/**Untuk membuat webserver kita mengunakan core module nodejs */
const http = require("http");
const port = 5000;
const fs = require("fs");

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error: file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Context-Type": "text/html",
    });

    const url = req.url;
    //versi if else
    // if (url === "/about") {
    //   renderHTML("./server/about.html", res);
    // } else if (url === "/contact") {
    //   res.write("<h1>Halaman Contact</h1>");
    //   res.end();
    // } else {
    //   renderHTML("./server/index.html", res);
    // }

    //versi switch
    switch (url) {
      case "/about":
        renderHTML("./server/about.html", res);
        break;
      case "/contact":
        renderHTML("./server/contact.html", res);
        break;
      default:
        renderHTML("./server/index.html", res);
        break;
    }
  })
  .listen(port, () => {
    console.log("Server is Listening on port 5000..");
  });
