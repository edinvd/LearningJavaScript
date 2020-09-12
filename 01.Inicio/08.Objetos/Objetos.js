// ### Objetos en JavaScript ###

// Crear un objeto
// Un ojeto puede tener elementos de string, enteros ,float,arrays,objetos
const persona = {
    nombre: 'Edin', // string
    apellido: 'Vasquez',
    edad: 19, // entero
    estatura: 1.75, // Float
    profesion: 'Ingeniero de software',
    correo: 'correo@correo.com',
    gustos: ['Musica','Comida','Bailar','Fotografia'], // Array
    hogar: { // objeto
        provincia: { // otro objeto
            provincia: 'Moyobamba',
            distrito: 'Moyobamba',
            sector: 'Puerto de Tahuischo',
            jiron: 'Edmundo del aguila',
            barrio: 'Zaragoza',
        },
        departamento: 'San martin',
        pais: 'Peru',
    },
    // creacion de una function dentro de un objeto
    nacimiento: function(){
        //return new Date().getFullYear() - 19; // 19 por la edad de la perosna.
        // Para haceder a las propiedades del objeto desde el mismo objeto
        return new Date().getFullYear() - this.edad; // "this." "edad" es un metodo para obtener resultado de manera dinamica, no todos tendra 19 años como en la linea de codigo anterior.

    }

};

console.log(persona);
// (Metodo) accediendo al valor de un string; del elemnto nombre.
console.log(persona.nombre);
// (Metodo) accediendo al valor de un entero; del elemnto edad.
console.log(persona.edad);
// (Metodo) accediendo al valor de un array; del elemnto gustos.
console.log(persona.gustos[2]);
// Podemos agregar nuevos elementos al array estando en modo obejto
persona.gustos.push('Deporte'); 

console.log(persona.gustos);
// (Metodo) accediendo al valor de los elementos de un objeto.
console.log(persona.hogar.provincia.sector);
// (Otro Metodo - No muy recomendable en JavaScript) accediendo al valor de los elementos de un objeto.
console.log(persona['hogar']['provincia']);

// Impresion de function del objeto
console.log(persona.nacimiento())

// Objeto | Ejemplo 2

const persona1 = {
    nombre: 'Camila', // string
    apellido: 'Oxford',
    edad: 27, // entero
    estatura: 1.75, // Float
    profesion: 'Ingeniera de software',
    correo: 'correo@correo.com',
    gustos: ['Musica','Comida','Bailar','Fotografia'], // Array
    hogar: { // objeto
        provincia: { // otro objeto
            provincia: 'Moyobamba',
            distrito: 'Moyobamba',
            sector: 'Puerto de Tahuischo',
            jiron: 'Edmundo del aguila',
            barrio: 'Zaragoza',
        },
        departamento: 'San martin',
        pais: 'Peru',
    },
    // creacion de una function dentro de un objeto
    nacimiento: function(){
        //return new Date().getFullYear() - 19; // 19 por la edad de la perosna.
        // Para haceder a las propiedades del objeto desde el mismo objeto
        return new Date().getFullYear() - this.edad; // "this." "edad" es un metodo para obtener resultado de manera dinamica, no todos tendra 19 años como en la linea de codigo anterior.

    }

};

console.log(persona1.nacimiento());
