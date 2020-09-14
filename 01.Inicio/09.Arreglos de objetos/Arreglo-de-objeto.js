// ### Arreglo de Objetos ###

// Crear un arreglo de objeto
const autos = [
    { modelo: 'Toyota', motor: 6.4},
    { modelo: 'Ford', motor: 6.7},
    { modelo: 'Kia', motor: 6.8},

];
// Metodo para ver los valores de un elemento.
console.log(autos[0]); 
// Metodo para ver los valores de un elemento en especifico.
console.log(autos[1].modelo)

// "for" para recorrer las veces que tenga de elementos el array y asi imprima las veces de elementos.
for (let i = 0; i < autos.length; i++) {
    console.log(autos ); 
};
// Metodo para ver los valores de los elementos en un for
for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].modelo);  
};
// Metodo para ver los valores de los elementos en un for con string literals
for (let i = 0; i < autos.length; i++) {
    console.log(`${autos[i].modelo} ${autos[i].motor}`);  
};

// Metodo para saber cuantos elementos tiene el arreglo
console.log(autos.length)

// Modificar el elemneto de un objeto
autos[1].modelo = 'Tesla';
console.log(autos);
