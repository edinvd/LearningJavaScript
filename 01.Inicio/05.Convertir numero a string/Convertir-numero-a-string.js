// ### CONVIRITENDO NUMERO A STRING

// Utilizamos "String" para convertir numeros a cadenas de textos

let codigoPostal ;
codigoPostal = 20221; // Valor agregado en tipo de dato numero
codigoPostal = String(codigoPostal); // Conversion de numero a tipo de dato string con el metodo "String".

console.log(typeof codigoPostal);
console.log(codigoPostal.length); // Aqui verificamos si el codigo postal tiene los cinco digitos con el metodo ".length" que se requiere para validarlo.

let dato;
let dato1;
dato = '4' + '4';

// Boolean | true
dato = true;
dato = String(dato);

console.log(dato);
console.log(dato.length);
console.log(typeof dato);

// Boolean | false
dato1 = false;
dato1 = String(dato1);

console.log(dato1);
console.log(dato1.length);
console.log(typeof dato1);

// array a string
let numero;
numero = [1,2,3,4,5,6]; // Esto es un array
numero = String(numero); // Aqui convertimos el array en string con el metodo"String".

console.log(numero);
console.log(numero.length);
console.log(typeof numero);

// toString
let number;
number = 123456789; // entero
number = true; //Boolean
number = null; // Null o nulo
number = undefined; // No definido o indefinido
number = [1,2,3,4,5,6]; // Array
number = number.toString(); // Convirtiendo a string

console.log(number);
console.log(number.length);
console.log(typeof number);
