/**
 * Ejemplo de uso del módulo VM
 * @author Joshua Moreno García
 */

var vm = require('vm');

var sandbox = {
  count: 2
};

var context = new vm.createContext(sandbox);
var script = new vm.Script('count *= 2;');

for (var i = 0; i < 2; ++i) {
  script.runInContext(context);
}
console.log(sandbox);