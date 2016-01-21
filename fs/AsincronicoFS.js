/**
 * Ejemplo de uso del módulo FS para lectura de archivos asincrónica
 * @author Joshua Moreno García
 */

var fs = require("fs");
var nameFile = "ejemplo.txt";
fs.readFile(nameFile, "utf8", function(error, content) {
	if(!!error){
		console.error(error);
	}else{
		console.log(content);
	}
});
