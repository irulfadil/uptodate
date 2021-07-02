const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

//routes
app.get("/", (req, res) => {
  res.sendFile("./server/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./server/about.html", { root: __dirname });
});

//middleware (jangan ditaruh diatas karena akan membaca setiap path yg sama dengannya '/')
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
