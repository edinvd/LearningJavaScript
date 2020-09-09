// ###############   OPERACIONES EN JAVSCRIPT ##########

    //En JavaScript cuando queremos hacer una operacion, tenemos que tener cuidado, existen la regla de poner "Number" antes de cada variable asignada. Para que esta la interprete como un numero y no como una cadena de texto, asi no termine uniendo los numeros sino devolviendo el resultado de acuerdo a la operacion.

// SUMA
/* var primerNumero = prompt('Ingresa primer numero'),
    segundoNumero = prompt('Ingresa segundo numero'),
    sumaTotal = Number(primerNumero) + Number(segundoNumero); */

/* document.write(sumaTotal); */

// Vamos hacer que muestre los nu7mero sumados y el resultado
/* document.write(primerNumero+'<br>');
document.write(segundoNumero+'<br>'+'___'+'<br>');
document.write(sumaTotal); */

// Otro ejemplo:

const numero1 = 10,
    numero2 = -22,
    numero3 = 30,
    numero4 = 40,
    numero5 = 50;

let resultado;
// Adición
resultado = numero1 + numero2;
// Resta
resultado = numero4 - numero3;
// Multiplicacion
resultado = numero5 * numero4;
// División
resultado = numero3 / numero5;
// Porcentaje / Modulo
resultado = numero5 % numero1;
// Valor de pi | PI
resultado = Math.PI;
// Redondeo
resultado = Math.round(2.6);
// En Redondeo ahi dos funciones mas si queremos:
    //El ".ceil" nos permite redondear todo decimal al numero entero siguiente.
    resultado = Math.ceil(2.25);
    //El ".floor" nos permite redondear todo decimal al numero entero en el que se encuentra.
    resultado = Math.floor(2.99);
// Raiz cuadrada
resultado = Math.sqrt(144);
// Absoluto | Devuelve numeros negativos a positivos
resultado = Math.abs(numero2);
// Potencia
resultado = Math.pow(8,3);
// Minimo | Devuelve el numero minimo que tengamos.
resultado = Math.min(52,8,10,99,63,84);
// Maximo | Devuelve el numero maximo que tengamos.
resultado = Math.max(52,8,10,99,63,84);
// Aleatorio
resultado = Math.random(1,10);

resultado = 100 * 0.2;

//_________________
let puntaje = 10,
    puntaje1 = 20,
    puntaje2 = 30,
    puntaje3 = 40;
    puntaje4 = 100;
    puntaje5 = 150;
    puntaje6 = 250;
    puntaje7 = 400;


console.log(puntaje++); // Esto incrementa en el orden de numeros, despues de lo que imprima el especificado.
console.log(puntaje1--); // Esto decrementa en el orden de numeros, despues de lo que imprima el especificado.
console.log(++puntaje2); // Esto incrementa en el orden de numeros desde ya.
console.log(--puntaje3); // Esto decrementa en el orden de numeros desde ya.

console.log(puntaje4 += 35); // Esto suma el dato dado con lo establecido.
console.log(puntaje5 -= 42); // Esto suma el dato dado con lo establecido.

// ############# TIPOS DE DATOS EN JAVASCRIPT ############# 




