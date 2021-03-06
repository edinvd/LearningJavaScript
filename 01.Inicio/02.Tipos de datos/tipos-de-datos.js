// #####TIPOS DE DATOS EN JAVASCRIPT #####

let valor;

valor = 'Esto es una cadena de texto'; // String
valor = 20; // Entero int
valor = true; // Boolean
valor = null; // Nulo
valor = undefined; // Indefinido
valor = {Mascota: 'Perro'} // Objeto

console.log(valor);

// Identificar el tipo de dato en JavaScript

// Primitivos:

//Se utiliza typeof para saber que tipo de datos son:
let tipodeDato;

tipodeDato = 20; // enteros
tipodeDato = 'Soy una cadena de texto'; // Cadena de texto
tipodeDato = true; // Boolean
tipodeDato = null; // Null o nulo

tipodeDato = Symbol('Simbolo');

// Secunadrios

// Array
tipodeDato = [1,2,3,4]; // Array
// Objetos
tipodeDato = {
    nombre : 'Edin',
    profesion : 'Desarrollador Web',
}
// Fecha
tipodeDato = new Date();

console.log( tipodeDato);