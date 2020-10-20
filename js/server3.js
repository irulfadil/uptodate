var http     = require("http");
var fs       = require("fs");
var url      = require("url");
var Router   = require("routes");
var routes   = Router();
var view     = require('swig');
var mysql    = require('mysql');
var qString  = require('querystring');
const { Console } = require("console");
var connection = mysql.createConnection({
    host :"localhost",
    port : 3306,
    user :"root",
    password :"",
    database :"test"
});


routes.addRoute("/", function(req,res){
    connection.query("select * from mahasiswa", function(err,rows,field){
        if(err) throw err;
    var html = view.compileFile("./server/index.html")({
        title : "Data Mahasiswa",
        data : rows
    });
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.end(html);
    });
});

// insert data
routes.addRoute('/insert',function(req,res){

    if(req.method.toUpperCase() == "POST"){
        var dataPost = '';
        req.on('data',function(chuncks){
            console.log(dataPost);
            dataPost += chuncks;
        });

        req.on('end',function(){ 
            dataPost = qString.parse(dataPost);
            connection.query("insert into mahasiswa set ?",dataPost,
            function(err,field){
                if(err) throw err;

                res.writeHead(302,{"location" : "/"});
                res.end();
            })
        });
    }else{
        var html = view.compileFile("./server/form.html")();
        res.writeHead(200,{"Content-Type" : "text/html"});
        res.end(html);
    }
});

// update data
routes.addRoute('/update/:nim',function(req,res){
    connection.query("SELECT * FROM MAHASISWA WHERE ?",
    {nim : this.params.nim},
        function(err,rows,field){
            if(rows.length){
                var data = rows[0];
                    if(req.method.toUpperCase() == "POST"){
                        var dataPost = "";
                        req.on("data",function(chuncks){
                            dataPost += chuncks;
                        });

                        req.on("end",function(){
                            dataPost = qString.parse(dataPost);
                            connection.query("update mahasiswa set ? where ?",[ dataPost, 
                            {nim : data.nim }],
                            function(err,field){
                                if(err) throw err;
                                res.writeHead(302,{"location" : "/"});
                                res.end();
                            });
                        });

                    }else{
                        var html = view.compileFile("./server/form_update.html")({
                            data : data
                        });
                        res.writeHead(200,{"Content-Type" : "text/html"});
                        res.end(html);
                    }
            }else{
                var html = view.compileFile("./server/404.html")();
                res.writeHead(404,{"Content-Type":"text/html"});
                res.end(html);
            }
        }
    );
});

//delete data
routes.addRoute('/delete/:nim',function(req,res){
    connection.query("delete from mahasiswa where ?",
        { nim : this.params.nim}
        ,function(err,field){
        if(err) throw err;
        res.writeHead(302,{"location" : "/"});
        res.end();
    });
});

routes.addRoute('/profile', function(req,res){
  var html = view.compileFile("./server/profile.html")();
  res.writeHead(200,{
    "Content-Type" : "text/html"
  });
  res.end(html);
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
}).listen(808);

console.log("server Running....");
