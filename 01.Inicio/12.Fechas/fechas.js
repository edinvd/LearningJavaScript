// ### FECHAS EN JAVASCRIPT ### ///

// existe un objeto llamado "date"
const diahoy = new Date();

console.log(diahoy);

//Fecha especifica
let navidad = new Date('12-04-2017');

console.log(navidad);

//Obtener mes
valor = diahoy.getMonth();
//Obtener dia
valor = diahoy.getDate();
//Obtener dia de la semana
valor = diahoy.getDay();
//Obtener el año
valor = diahoy.getFullYear();
//Obtener la hora
valor = diahoy.getHours();
//Obtener los minutos
valor = diahoy.getMinutes();
//Obtener los segundos
valor = diahoy.getSeconds();
//Obtener milisegundos
valor = diahoy.getMilliseconds();
//Obtener número de milisegundos desde el 01/01/1970
valor = diahoy.getTime();

valor = diahoy.getFullYear()
//"get" es para obtener valor actual
//"set" sirve para agregar o reescribir valor

//Metodo para cambiar el año del actual con "set"
valor = diahoy.setFullYear(2016),
valor = diahoy.getFullYear();


console.log(valor)
