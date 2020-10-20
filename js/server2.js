var http     = require("http");
var fs       = require("fs");
var url      = require("url");
var Router   = require("routes");
var routes   = Router();

routes.addRoute('/', function(req,res){
  res.writeHead(200,{
    "Content-Type" : "text/plain"
  });
  res.end("index page");
});

routes.addRoute('/profile/:name/:alamat', function(req,res){
  res.writeHead(200,{
    "Content-Type" : "text/plain"
  });
  res.end("profile page ->"+this.params.name+" dari "+this.params.alamat);
});

routes.addRoute('/404',function(req,res){
  res.writeHead(200, {
    "Content-Type" : "text/plain"
  });
  res.end('404 page');
});

http.createServer(function(req,res){
  var path = url.parse(req.url).pathname;
  var match = routes.match(path);
  if(match){
    match.fn(req,res);
  }else{
    res.writeHead(404,{
      "Content.type" : "text/plain"
    });
    res.end("Page not found !!");
  }
}).listen(80);

console.log("server Running....");
