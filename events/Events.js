/**
 * Ejemplo de uso del módulo Events
 * @author Joshua Moreno García
 */

var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('hello', function(){
	console.log('Hi, How are you?');
	emitter.emit('how');
});

emitter.on('how', function(){
	console.log('Fine, Bye');
});

console.log('Hello');
emitter.emit('hello');