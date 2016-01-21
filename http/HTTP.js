/**
 * Ejemplo de servidor HTTP Simple en Node.js
 * @author Joshua Moreno García
 */

//Se carga el modulo HTTP
var http = require('http');

//Se crea el server y se configura su respuesta a cualquier petición
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  response.end("{\"mensaje\":\"Introduccion a Node.js\"}");
});

server.listen(8080, function(){
	console.log("Servidor corriendo en http://127.0.0.1:8080/");
});