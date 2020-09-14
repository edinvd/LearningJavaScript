// ### Funciones ###

// Crear una funcion
function saludar(){
    console.log('Hello Edin')
};
// Aqui tenemos que pasarle parametros para que devuelva la impresion
/* saludar(); */

//
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

saludar('Camila');
saludar('Monica');
saludar('Esteban');
saludar('Tim');
saludar('Kim');

// "function" de suma
function suma(a,b){
    console.log(a+b );
}
suma(1,2 );
suma(3,2 );
suma(8,2 );

// "function" de suma con "return"
function sumar(a,b,c ){
    return a + b + c;
}

let suma1 = sumar (1,2,46);

console.log(suma1);

// "function" de un saludo con "return"

function saludar(name = 'Visitante1'){ // Metodo nuevo para completar espacios en caso que no ingrese su nombre un usuario. "Visitante1"
    
    if (typeof name === 'undefined') {name = 'Visitante'}// Metodo antiguo para completar espacios en caso que no ingrese su nombre un usuario.
    // Retorna
    return `Hola ${name}`;
}

let saludo;
//Nombre especificado
saludo = saludar(/* 'Edin' */); 
//Nombre a ingresar por prompt
//saludo = saludar( prompt('Cual es tu nombre: '));
console.log(saludo);


// ### Function Expression ###

// Resta
const resta = function(a = 4, b = 6){
    return a - b ;
}

console.log(resta(5,3));
console.log(resta(16,3));
console.log(resta(10,)); // Si falta el valor de "b", tomara el especificado en caso no aya.

// Presentacion
/* const yo = function(miNombre = prompt('Como te llamas?'), edad = 19, profesion = 'Ingeniero de software'){
    return `Yo soy ${miNombre}, Tengo la edad de ${edad} años y soy ${profesion}`;
}

console.log(yo()); */

// MAS FUNCIONES DE JAVASCRIPT

// IIFE - Funciones que se invocan inmediatamente.
(function(){
    console.log('Creando un IIFE');
})();

// otro Metodo
(function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`)
})('JavaScript');

// Metodos de Propiedad
// Son cuando una funcion se pone dentro de un objeto

const musica = {
    reproducir: function(id){
        console.log(`Reproduciendo Musica id ${id}`);
    },
    pausar: function(){
        console.log('Musica en Pausa');
    },
    aleatorio: function(){
        console.log('Musica Aleatoria')
    }
}

// Los metodos tambien pueden guardarse o crearse fuera del objeto
musica.borrar = function(id){
    console.log(`Eliminando la musica con el id ${id}`)
}

musica.reproducir(412);
musica.pausar();
musica.aleatorio();
musica.borrar(54);
