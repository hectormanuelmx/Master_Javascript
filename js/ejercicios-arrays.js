'use strict'

/*
1.- Pida 6 numeros por pantalla y los meta en un array
2.- Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y de la consola
3.- Ordenarlo y mostrarlo
4.- Invertir su orden y mosrtrarlo
5.- Mostrar cuantos elementos tiene el array
6.- Busqueda de un valor introducido por el usuario (que nos diga si lo encuentra y su indice(Se valorará el uso de funciones))
*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Elementos dentro del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento,index) => {
        document.write("<li>"+elemento+"</li>");
        
});
document.write("</ul>");
 }
//Pedir 6 numeros
var numeros = [];

for (var i = 0;i <= 5;i++){
    numeros.push(parseInt(prompt("Escribe un número",0)));
}

//Mostrar en el cuerpo de la página
mostrarArray(numeros);
//Mosyrar numeros en consola
console.log(numeros);
//Ordenar y mostrar el array
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros,'ordenado');

//Invertir y mostrar numeros
numeros.reverse();
mostrarArray(numeros,'revertido');

//Mostrar cantidad de elemetos dentro del array
document.write("<h1>El array tiene : "+numeros.length+" elementos");

//Busqueda
var busqueda = parseInt(prompt("Buscar un numero dentro del array,0"));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("<hr/><h1>Encontrado</h1>");
    document.write("<hr/><h1>Posicion de la busqueda: "+posicion+"</h1><hr>");
    
} else {
   document.write("<hr/><h1>No encontrado</h1><hr/>") 
}
