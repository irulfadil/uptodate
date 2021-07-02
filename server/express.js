const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

//routes
app.get("/", (req, res) => {
  res.sendFile("/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("/about.html", { root: __dirname });
});

app.get("/product/:id/category/:idCat", (req, res) => {
  res.send(
    `Product ID : + ${req.params.id} \n Category ID: ${req.params.idCat}`
  );
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID : + ${req.params.id} \n Category: ${req.query.category}`
  );
});
//middleware (jangan ditaruh diatas karena akan membaca setiap path yg sama dengannya '/')
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
