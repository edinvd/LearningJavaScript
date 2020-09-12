// ### Arrays y metodos ###

// Los arrays o arreglos se empiezan a contar desde cero.

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

// Ordenar un arreglo

// Ordenar un array de string
const frutas = ['Manzana', 'Uva', 'Pera', 'Granadilla', 'Piña', 'Durazno', 'Sandia', 'Fresa'];
// Metodo para ordenar un array en el orden alfabetico
frutas.sort();

console.log(frutas);

// Ordnear un array de numeros
const numbers = [1,58,20,56,14,47,39,51,84,100,93,6];
// Metodo para ordenar un array de numeros de menor a mayor tenemos que crear una function.
numbers.sort(function (x,y) {
    //return x - y ; // De menor a mayor.
    return y - x; // De mayor a menor.
} );

console.log(numbers);

// Arrays trabajando con "const"
// const tiene valores que no se le puede cambiar mas adelante.

const miArray = [1,2,3];
// Forma erronea de cambiar un array, no puede cambiarse todos los elementos del array.
//miArray = [4,5,6];
// Tenemos que hacerlo de forma individual, a cada elemento del array.
// Metodo para cambiar un elemento del array.
miArray[0] = 4;
// Metodo para agregar un elemento al final
miArray.push(5);

console.log(miArray);

// Arrays trabajando con "let"
// let tiene valores que se le puede renombrar mas adelante.

// Cuando trabajamos con let podemos renombrar cualquier elemento
let miArray1 = [1,2,3]; // Asignacion de elementos al array.
miArray1 = [4,5,6]; // Reescrito el array.
miArray1.push(7.1); // Agregar un nuevo elemto al final .del array

miArray1 = ['Lunes','Martes'] // Reescrito el array de numeros a cadenas de textos.

console.log(miArray1);
