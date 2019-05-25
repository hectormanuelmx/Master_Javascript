'use strict'

var categorias = ["terror","drama","comedia","suspenso"];

var peliculas = ["La noche del demonio","interestellar","Qua paso ayer","La noche del demonio"]

var cine = [categorias,peliculas];

console.log(cine[0][3]);
console.log(cine[1][1]);

//Agregar datos elementos al array y mostralos en consola

var elemento = "";

do {
    elemento = prompt("Introduce una pelicula");
    peliculas.push(elemento);
} while (elemento != "acabar")
 

//el metodo pop en JavaScript elimina el ultimo elemento de un array
peliculas.pop();
console.log(peliculas);

//Convertir un string en un array

var cadena = "I think of you, i haven´t slept...";

var array_new = cadena.split();
console.log(array_new);

//Ordenar un array con los metodos sort y reverse de manera alfabatica e inverssa con reverse

var canciones = ["Amazing Day","September song","Sunset Lover","Always in my Head"];
console.log(canciones.sort());
console.log(canciones.reverse());

//Busqueda en arays
