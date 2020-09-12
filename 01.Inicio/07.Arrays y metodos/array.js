// ### Arrays y metodos ###

//Crear un arreglo
const numeros = [10,20,30,40,50,60,70,80,90];

console.log(numeros);

// Arreglo de string (Metodo Alternativo)
const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre');



// Saber cuanto valores agregados tiene.
console.log(meses.length); 
// Metodo para saber realmente si es un array.
console.log(Array.isArray(meses)); 

// Añadir en un  arreglo. //

//Metodo para agregar un nuevo elemento al array. Puedes especificarle el numero de orden en el que quieres que se agregue.
meses[6] = 'miMes';
// Metodo para agregar un nuevo elemento al inicio del arreglo.
meses.unshift('Nuestro Meses');
// Metodo para agregar un nuevo elemento al final del arreglo.
meses.push('tuMes'); 
// Metodo para imprimir un valor especifico del array.
console.log(meses[10]); 
// Metodo para verificar si un elemento se ncuentra en el array y en que posicion.
console.log(meses.indexOf('Diciembre'));

// Eliminar elementos del arreglo //

// Eliminar un elemento del arreglo (El ultimo elemento)
meses.pop();
// Eliminar un elemento del arreglo (El primer elemento)
meses.shift();
// Eliminar un elemento especifico del arreglo
meses.splice(8,1);

// Invertir Repocisionamiento (Primero va al ultimo - el ultimo viene primero).
meses.reverse();

// Unir Arreglos
let arreglo1 = [1,2,3],
    arreglo2 = [7,8,9];
// Metodod para unir arreglos
console.log(arreglo1.concat(arreglo2)); 

console.log(meses);

// Array mezclado
const mezclado = new Array('Hola', 20, true, null, false, undefined);

console.log(mezclado);