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
