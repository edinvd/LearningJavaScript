// ************ EJERCICIOS PRACTICOS  **************

// COMILLAS SIMPLES INVERTIDAS

let name = prompt ('"¿Cual es tu nombre?"');
let age = prompt ('¿Cual es tu edad?');
let country = prompt ('¿De donde eres?');

document.getElementById('app').innerHTML = `Bienvenido ${name} de ${age} años.<br>` + `Eres de ${country}.`;

// SALTO DE LINEA

var apodo = 'Camii';
var edad = 19;
document.write('Hola! '+ apodo+'.' + '<br>Tienes '+edad+' años.');

// PEDIDO DE DATOS CON "prompt" Y CONCATENAR CON COMILLAS INVERTIDAS

var nombre = prompt('¿Cual es tu nombre?');
var apellido = prompt('¿Cual es tu apellido paterno?'); 

console.log(`Hola! ` + nombre + `. ` + `Tu apellido paterno es ` + apellido); 

document.write(`Hola! ` + nombre + `. ` + `<br>Tu apellido paterno es ` + apellido);


// EJERCICIO ESCAPAR LAS COMILLAS
//Aqui tenemos una oracion que lleva comillas dobles

 let frase;
frase = 'Entonces dije: "Esto me gusta".';
console.log(frase); 

/* Pues si queremos que la oracion tenga comillas simples, tanto como en la cadena de texto como en la oracion */

let frase1;
frase1 = 'Entonces dije: \'Esto me gusta\'.'
console.log(frase1);

// Este solo necesita una diagonal invertida antes de la comilla. Esto es mas usado en caso de que que escribieramos Apóstrofe  

// CONCATENAR JAVSCRIPT

mensaje = 'Java' + 'Script';
console.log(mensaje);
