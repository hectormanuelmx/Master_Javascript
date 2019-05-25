'use strict'
//Metodos de ebusqueda en cadenas

var texto = "Estaba mirando tus ojos y me fui, sintiendo tu sonrisa oyendote hablar...";

var busqueda  = texto.match("hermosa");

console.log(busqueda);


//Metodo par areemplazar texto en ena cadena en JAVASCRIPT
//Metodo .replace

var texto2 = "La más chisquiada";
var busqueda = texto2.replace("chisquiada","hermosa");
console.log(busqueda);

/////////////////////////////////////

// La funcion split corta cada una de las palabras y as guarda en un array
var texto3 =" Eres la mujer mas hermosa";
var busqueda = texto3.split(" ");
console.log(busqueda);

// La funcion trim quita los espcaios al principio y al final de una cadena de texto
var texto3 =" Eres la mujer mas hermosa";
var busqueda = texto3.trim();
console.log(busqueda);
