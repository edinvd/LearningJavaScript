let nombre = prompt ('"¿Cual es tu nombre?"');
let edad = prompt ('¿Cual es tu edad?');
let pais = prompt ('¿De donde eres?');

document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años.<br>` + `Eres de ${pais}.`;
/* Utilizar <br> para salto de linea en JavaScript */

