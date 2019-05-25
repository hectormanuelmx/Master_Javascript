'use strict'

//Arrays, Arreglos, Matrices

var nombre = " Victor Robles";
var nombres = ["Victor Robles", "La mas hermosa", "Hector Manuel",52, true];
var lenguajes = ["Swift","JavaScript","Ruby","Java","C#","Python"];

var elemento = parseInt(prompt("Elige la posicion del elemento deseado a mostrar",0));

/*
if (elemento >= nombres.length){
    alert("Introduce un numero menor a "+ nombres.length);
    }else{
        alert(nombres[elemento]);
    }
*/

document.write("<h1>Los mejores lenguajes de programacion del 2019</h1>")
/*
document.write("<ul>");

for(var i = 0;i <= lenguajes.length;i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul");
*/

/*
lenguajes.forEach(elemento => {
    document.write("<h1>"+elemento+"</h1>");
});
*/

for(let lenguaje in lenguajes){
    console.log(lenguajes[lenguaje])
}