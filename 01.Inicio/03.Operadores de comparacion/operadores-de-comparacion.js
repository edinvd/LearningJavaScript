// ### OPERADORES DE COMPARACION ###

const number = 30;
const number1 = 20;
const number2 = '20';

// Mayor o Menor
// number es mayor que number1
console.log(number > number1);
// number es menor que number1
console.log(number < number1);

// Comparador de igualdad
// El "==" es una comparcion de igualdad.
console.log(30 == '30');
// El "===" es una comparacion de igualdad estricta, Revisa el valor y el tipo de dato.
console.log(30 === '30');

console.log(typeof 30); //Este es un numero
console.log(typeof '30'); // Este es un string

// Diferentes "!="
// Es 2 diferente a 3
console.log(2 != 3);
// Es 7 diferente a 7
console.log(7 != 7);

// Diferencia entre string | Se toma en cuenta los espacios
console.log('Hola' != ' Hola');

// Mayor o Menor en String
// La letra "A" mayuscula en javscript tiene menor valor que "Z" mayuscula 
// pero la letra "a" minuscula tiene mayor valor que "Z" mayuscula 
// pero menor que "z" minuscula.
console.log('A' > 'Z');
console.log('a' > 'z');
console.log('A' > 'a');
console.log('A' < 'z');

// Valores nulos o No definidos
console.log(null == undefined); // devuelve "true" porque solo ve valor
console.log(null === undefined); // Devuelve "false" porque ve valor y tipo de dato, es mas estricto

