// ### CONVERTIR STRING A NUMERO ###

const numero = 50,
      numero1 = '30';
      numero2 = 'tres';

console.log(typeof numero);
// Aqui lo concatena porque sabe que numero 1 es string.
console.log(numero + numero1);

// Tendriamos que convertirlo
console.log(numero + Number(numero1));

// Aqui aplica resta porque sabe que tiene "-" y no "+", sino lo intrepretaria como una concatenacion.
console.log(numero - numero1);
// "parseInt" tambien es igual que "Number" | convierte string a numero.
console.log( parseInt(numero1));
//Aqui trata de esforzar y convertirlo en numero un dato en string, con la funcion "typeof Number"
console.log(typeof Number(numero2));
// Y si eliminariamos "typeof" este devolveria "NaN" No es un Numero.
console.log( Number(numero2));

// Number |Convirtiendo a numero

let dato;
dato = Number('20');
dato = Number('34.345657')
dato = Number('Hola Mundo')
dato = Number(true);
dato = Number(false);
dato = Number(null);
dato = Number(undefined);
dato = Number([0,1,2,3,4,5,6,7,8,9,]);

console.log(dato);

// parsefloat - parseInt

let valor;
valor = parseInt('100'); // parseInt es para numeros enteros
valor = parseFloat('100.3450') // parseFloat es para decimales

valor = parseInt('45.99') // Solo imprimira 45 y ya no el decimal porque esta especificado con parseInt, que es para enteros.

valor = parseFloat('803'); // Aqui parseFloat responde normal, porque no es problema que tenga enteros, incluso podemos agregar decimales.

console.log(valor);
console.log(typeof valor);

// tofixed | Es solo para numeros
//Como funciona:
let number;
number = '7609457'; // No funciona en strings, devuelve error.
number = 7609457; // Solo funciona en numeros
number = 2586648.972594; // Solo imprimira hasta el cuarto digito despues del punto, esto es de acuerdo a lo espcificado en el toFixed.

console.log(number.toFixed(4)); //espécificarle hasta cuanto numeros imprima despues del punto.

// Com
let number1;
let number2;
number1 = '15239897'; //Un string con numeros enteros
number2 = '823746.8234756876'; //Un string con numeros tipo float

console.log(parseInt(number1).toFixed(6)); // Convirtiendo un string a numeros enteros con parseInt, y luego un toFixed de 6 digitos despues del punto.
console.log(parseFloat(number2).toFixed(3)); // Convertira el string en Float luego un Fixed de 3 digitos.