var http = require('http');
var fs = require('fs');

function send404request(response) {
    response.writeHead(404,{"content-Type":"text/plain"});
    response.write("Error 404: page not found");
    response.end();
}
function onRequest(request,response) {
    if(request.method == "GET" && request.url == "/"){
        response.writeHead(200,{"Content-Type": "text/html"})
        fs.createReadStream("./index.html").pipe(response);
    }
    else{
        send404request(response);
    }
}
http.createServer(onRequest).listen(8888);
console.log("server is running");