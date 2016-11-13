var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');


function send404response(response){
	response.writeHead(404, {"Context-Type":"text/plain"} );
	response.write("Page does not exists");
	response.end();

}

function onRequest(request,response){
	if(request.url.indexOf('.html') != -1){ //request.url has the pathname, check if it conatins '.html'

      fs.readFile(__dirname + '/public/index.html', function (err, data) {
        if (err) console.log(err);
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
      });

    }

    if(request.url.indexOf('.js') != -1){ //request.url has the pathname, check if it conatins '.js'

      fs.readFile(__dirname + '/public/js/index.js', function (err, data) {
        if (err) console.log(err);
      response.writeHead(200, {'Content-Type': 'text/javascript'});
      response.write(data);
      response.end();
      });

    }

    if(request.url.indexOf('.css') != -1){ //request.url has the pathname, check if it conatins '.css'

      fs.readFile(__dirname + '/public/css/style.css', function (err, data) {
        if (err) console.log(err);
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(data);
      response.end();
      });

    }
}
http.createServer(onRequest).listen(8888);
console.log("Server is now running");