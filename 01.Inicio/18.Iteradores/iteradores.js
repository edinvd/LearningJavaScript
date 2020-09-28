// ### Iteraciones ###
const ciudades = ['London','New York','Texas','Silicon Valley'];
const ordenes = new Set([123,321,134,325]);
const datos =  new Map();
datos.set('nombre', 'Edin');
datos.set('profesion', 'Desarrollador Web');

console.log(ciudades);
console.log(ordenes);
console.log(datos);

// Entries iterador
// Entries a las ciudades
for(let entrada of ciudades.entries()){
    console.log(entrada);
}

// Entries para las Ordenes
for(let entradas1 of ordenes.entries()){
    console.log(entradas1);
}

// Entries para el map
for(let entradas2 of datos.entries()){
    console.log(entradas2);
}

// Values Iterador | solo imprime lo que son los valores
//Value a las ciudades
for(let entrada3 of ciudades){
    console.log(entrada3);
}

// Values para las Ordenes
for(let entradas1 of ordenes.values()){
    console.log(entradas1);
}

// Values para el map | Solo regresa los valores del map, ignorando las llaves
for(let entradas2 of datos.values()){
    console.log(entradas2);
}

// Keys Iterador | solo devuelve las llaves de los valores
// Keys a las ciudades
for(let entrada4 of ciudades.keys()){
    console.log(entrada4);
}

// Keys para las Ordenes
for(let entradas1 of ordenes.keys()){
    console.log(entradas1);
}

// Keys para los map
for(let entradas2 of datos.keys()){
    console.log(entradas2);
}

// Vieja forma de como se hacia un iterador con for
const mensaje = 'Apriendo JavaScript';
for (let i=0;i<mensaje.length;i++){
    console.log(mensaje[i]);
}

// Nueva forma de como se hacia un iterador con for
const mensaje1 = 'Apriendo JavaScript';
for(let letra of mensaje1){
    console.log(letra);
}

// Llamando los enlaces mediante las etiquetas a de html en javscript
const enlaces = document.getElementsByTagName('a');
for (let enlace of  enlaces){
    console.log(enlace.href); // .href para solo imprimir las urls
}