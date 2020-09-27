//### Estructuras de Control IF ELSE ELSEIF ###
const edad = 19;
if (edad >= 18) /* "!=" no pueden ser | "== o ===" son iguales o permitidos solo por ese valor */ {
    console.log("Puedes ingresar al sitio.")
} else {
    console.log("No puedes ingresar al sitio.")
}

// Poner y quitar valores en una variable
let puntaje = 2000;
if (puntaje){
    console.log(`El puntaje es de ${puntaje}`);
} else{
    console.log(`No hay puntaje`);
}

// Comparar dos variables
let efectivo = 274;
let totalCarrito = 300;

if (efectivo > totalCarrito){
    console.log('Puedes realizar el pago')
} else {
    console.log('Tienes fondo insuficiente')
}

// ### ELSE IF ###
let hora = 20;
if (hora <= 10 ) {
    console.log(`Buenos dias, son las ${hora}`)
} else if (hora <= 18) {
    console.log(`Bunas tardes, son las ${hora}`)
} else {
    console.log(`Buenas noches, son las ${hora}`)
};

//### ELSE IF | && ||
// && Comprueba limites apartir de dos valores, es mas estricto porque tiene que cumplirse ambas
// || Revisa una o dos valores
let hora1 = 15;
if (hora1 >= 0 && hora1 <= 10){
    console.log(`Buenos dias`)
}else if (hora1 > 10 && hora1 <= 18){
    console.log(`Buenas tardes`)
}else if (hora1 > 18 && hora1 <= 24){
    console.log(`Buenas noches`)
}else {
    console.log(`No es una hora valida`)
}

// La primera condicion cumplida, esa imprime.
let puntaje1 = 100;
if (puntaje1 < 150){
    console.log(`El puntaje es menor que 150`)
}else if (puntaje1 < 250){
    console.log(`El puntaje es menor que 250`)
}

//Operador || comprueba si un valor se cumple de otros
let efectivo1 = 300,
    credito = 300,
    disponible = efectivo1 + credito
    totalCarrito1 = 500;

if(totalCarrito1 < efectivo1 || totalCarrito1 < credito || totalCarrito1 < disponible){
    console.log('Puedes pagar')
} else {
    console.log('No puedes pagar')
}

// Operador Ternario
const logueado = true;
console.log( logueado == true ? 'Estas logueado' : 'No estas logueado')