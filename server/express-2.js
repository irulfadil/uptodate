const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;
const path = require("path");

//gunakan ejs dengan keyword 'view engine'
app.set("view engine", "ejs"); //express sudah mendeteksi file didalam folder view
app.use(expressEjsLayouts);

//routes
app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "irul",
      email: "irul@yahoo.com",
    },
    {
      nama: "amin",
      email: "amin@yahoo.com",
    },
  ];

  res.render("index", {
    mahasiswa,
    layout: "layout/main",
    title: "Halaman Home",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    nama: "irulfadil",
    layout: "layout/main",
    title: "Halaman About",
  });
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
