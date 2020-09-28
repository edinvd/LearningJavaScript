// ### Window object ###
//Son parte de windows
//prompt
const nombre = prompt("Como te llamas: ");
console.log(`Bienvenido ${nombre}!`);

//comfirm
if(confirm('Eliminar')){
    console.log('Eliminado');
} else {
    console.log('Nada paso!');
}

// Utizando imformacion de window
// 
let altura,
    anchura,
    alturaTotal,
    anchuraTotal;
    // Toma las medidas de toda la ventana de google con todo la herramienta de desarrolladores
    alturaTotal = window.outerHeight
    anchuraTotal = window.outerWidth

    // Toma las medidas solo de la pagina web de google
    altura = window.innerHeight
    anchura = window.innerWidth
// Medida Total
console.log(`La altura total de la ventana es: ${alturaTotal}`);
console.log(`La anchura total de la ventana es: ${anchuraTotal}`);
// Medidda del sitio web
console.log(`La altura del sitio web es: ${altura}`);
console.log(`La anchura del sitio web es: ${anchura}`);

// Location
// Las llaves tienen objetos, y un objeto puede ser accedido mediante el "."
let ubicacion;

ubicacion = window.location.host; //".host"
//redireccionado
window.location.href = '#'
console.log(ubicacion);

// Muestra de como se aplica el metodo de regreso de paginas y avanzar, de acuerdo a nuestra navegacion
window.history.go(-3);

// Mostrando imformacion mediante el metodo window

let navegador,
    navegadorVersion,
    navegadorLenguage,
    navegadorName;

navegador = window.navigator;
navegadorName = window.navigator.appName;
navegadorVersion = window.navigator.appVersion;
navegadorLenguage = window.navigator.language;

console.log(navegador);
console.log(navegadorName);
console.log(navegadorVersion);
console.log(navegadorLenguage);