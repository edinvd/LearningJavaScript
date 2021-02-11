// ### Scope en JavaScript ###
// La visibilidad que tiene un valor en javscript dentro de una funcion o for.
//El scope decide a qué variables tienes acceso en cada parte del código. Existen dos tipos de scope, el scope global y el scope local.


var a = 'a';
let b = 'b';
const c = 'c';

// Scope de la funcion
function funcionScope(){
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('Funcion: '+a,b,c);
}
funcionScope();
// Scope de bloque
if(true){
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('Bloque: '+a,b,c);
}

//for | logra cambiar el valor de la variable "a"
for(var a=0;a<10;a++){ 
    console.log(a);
}


console.log('Globales: '+ a,b,c,);