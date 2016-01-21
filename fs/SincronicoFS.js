/**
 * Ejemplo de uso del módulo FS para lectura de archivos sincrónica
 * @author Joshua Moreno García
 */

var fs = require("fs");
var content = fs.readFileSync("ejemplo.txt", "utf8");
console.log(content);