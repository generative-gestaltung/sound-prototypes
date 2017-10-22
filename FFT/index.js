// load library
var restify = require("restify");
var PORT = 8888;


var server = restify.createServer();

server.get (/.*/,
            restify.serveStatic({
              directory: __dirname,
              default: 'fft.html'
           }));

server.listen (PORT, function() {
	console.log("%s listening at %s", server.name, server.url);
});
