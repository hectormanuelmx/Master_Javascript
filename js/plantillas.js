'use strict'

//Plantillas de texto en JavaScript

var nombre = prompt("Escribe tu nombre","Defaul");
var apellidos = prompt("Ahora escribe tus apellidos");

var texto =  `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: </h3> ${nombre}</h3>
    <h3>Mis apellidos son: </h3> ${apellidos}</h3>
 `;
 document.write(texto);
