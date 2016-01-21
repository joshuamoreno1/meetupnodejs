/**
 * Ejemplo de uso del módulo Cluster
 * @author Joshua Moreno García
 */

var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
	console.log('Numero de CPUs:' + numCPUs);
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log("worker ${worker.process.pid} died");
  });
} else {
	console.log("Worker creado!!");
    http.createServer(function (request, response) {
	  response.writeHead(200, {"Content-Type": "application/json"});
	  response.end("{\"mensaje\":\"Cluster Corriendo...\"}");
	}).listen(8080);
}