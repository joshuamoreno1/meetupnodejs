/**
 * Ejemplo de uso del módulo URL
 * Tomado del sitio Web http://apetuts.com/tutorial/node-js-url-module/
 * @author apetuts.com
 */

var url = require("url");
var hyperlink = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash';";

var urlObject=url.parse(hyperlink);

console.log(urlObject);

var urlString = url.format(urlObject);
console.log("\n");
console.log(urlString);

console.log(url.resolve("http://www.ceiba.com.co/", "/movil"));