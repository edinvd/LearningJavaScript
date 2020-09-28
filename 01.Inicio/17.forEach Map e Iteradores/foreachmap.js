// ### For Each Map Iteraciones ###
//Recorrer un arreglo con foreach
const pedientes = ['Tarea','Programar','Leer','Proyecto','Comer','Beber'];
//for
/* for(let i=0;i < pedientes.length;i++){
    console.log(pedientes[i]);
} */

// forEach
pedientes.forEach(function(pendiente , index) {
    console.log(` ${index} : ${pendiente}`);
});

console.log(pedientes);

// map para recorrer un arreglo de objetos

const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Computadora'},
    {id: 4, producto: 'Mesa'},
    {id: 5, producto: 'Cocina'},
    {id: 6, producto: 'Plancha'},
    {id: 7, producto: 'Radio'},
];
const nombreProducto = carrito.map(function(){
    return carrito.producto;
});

console.log(nombreProducto);

//
const automovil = {
    modelo: '4Runner',
    motor: 6.1,
    anio: 2000,
    marca: 'Toyota',
};
for(let auto in automovil){
    console.log(` ${auto} : ${automovil[auto]}`)
}

console.log(automovil)