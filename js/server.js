var http = require("http");
var url = require("url");
var fs = require("fs");
http.createServer(function(req,res){
    var kode= 0;
    var file= "";
    var access = url.parse(req.url);
    console.log(access);
    if(req.url == "/"){
        //index
        kode = 200;
        file = "temp-server.html";
    }else if (req.url == "/profile"){
        //profile
        kode= 200;
        file="profile.html";
    }else{
        //not found
        kode=404;
        file="404.html";
    }

    res.writeHead(200,{"Content-Type": "text/html"});
    fs.createReadStream("./server/"+file).pipe(res);
    }).listen(8888);

    console.log("server running....");