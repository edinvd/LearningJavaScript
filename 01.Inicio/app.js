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

//UNIENDO VARIABLES EN UNA SOLA

let aprendiendo = 'Aprendiendo',
    tecnologia = 'JavaScript';

console.log(aprendiendo+' '+tecnologia);

// TEMPLATES LITERALS

let learning = 'Aprendiendo',
    technology = 'Python';

console.log(`${learning} ${technology}`)


// ###### METODOS QUE SON APLICABLES SOLO A CADENAS DE TEXTOS ######

// METODO length (.length) | Para saber cuantas letras tiene una palabra.

let palabra = 'JavaScript';
console.log(palabra.length);

// METODO concat (.concat) | Para unir con una cadena predefinida.

let palabra1 = 'Java';
console.log(palabra.concat(' ' + 'es un lenguaje popular'));

// METODO toUpperCase (.toUpperCase) | Para convertir cadenas minusculas a mayusculas.

let palabra2 = 'C es un gran lenguaje de programacion';
console.log(palabra2.toUpperCase());

// METODO toLowerCase (.toLowerCase) | Para convertir cadenas minusculas a mayusculas.

let palabra3= 'C# ES MANTENIDO POR Microsoft';
console.log(palabra3.toLowerCase());

// METODO indexOf (.indexOf) | Para buscar palabras de acuerdo a lo especificado. Este devuelve en numero donde encuentra lo indicado, de lo contrario muestra -1, porque no encuentra lo especificado.

let palabra4= 'Aprederemos HTML5, CSS3 y JavaScript para ser un desarrollador FrontEnd';
console.log(palabra4.indexOf('FrontEnd'));

// METODO substring (.substring) | Para indicar de donde a donde muestre el string de acuerdo a lo especificado entre parentesis inicio y fin.

let palabra5= 'Aprederemos HTML5, CSS3 y JavaScript para ser un desarrollador FrontEnd';
console.log(palabra5.substring(03,15));

// METODO split (.split) | Es para ver cuantos espacios tiene nuestro texto asi sabremos cuantas palabras existen en nuestra cadena de texto. Tomara de acuerdo a lo que le indiquemos.

let palabra6= 'Aprederemos HTML5, CSS3 y JavaScript para ser un desarrollador FrontEnd';
console.log(palabra6.split(' '));

// METODO replace (.replace) | Es para cambiar palabras con lo especificado.

let palabra7= 'Aprederemos HTML5, CSS3 y JavaScript para ser un desarrollador FrontEnd';
console.log(palabra7.replace('CSS3','CSS'));

// METODO includes (.includes) | Es para verificar que si la palabra existe de acuerdo a lo especificado. Si existe la palbra devolvera "true", o de lo contrario sera "false".

let palabra8= 'Aprederemos HTML5, CSS3 y JavaScript para ser un desarrollador FrontEnd';
console.log(palabra8.includes('FrontEnd'));

// METODO repeat (.repeat) | Esto repetira nuestra cadena de texto las veces que la especifiquemos.

let palabra9= 'Esto se repetira las veces indicadas'+' ';
console.log(palabra9.repeat(10));