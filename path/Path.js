/**
 * Ejemplo de uso del módulo Path
 * @author Joshua Moreno García
 */

var path = require("path");

console.log('unir: ' + path.join('/prueba', 'prueba1', 'qwerty4/qwerty34', 'wer', '..'));

console.log('normalizar : ' + path.normalize('/prueba//prueba1/qwerty/../34qwer/rt/'));

console.log('resolver : ' + path.resolve('path.txt'));

console.log('nombre extension : ' + path.extname('path.txt'));