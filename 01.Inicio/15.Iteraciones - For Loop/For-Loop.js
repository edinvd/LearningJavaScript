// ### Iteraciones - For Loop ####
/* for (inicialización; condición; actualización) { 
    //sentencias a ejecutar en cada iteración 
} */
for(let i=0; i<=10;i++){
    console.log(`Numero: ${i}`);
}
console.log('Space')
// Si queremos escribir los número del 1 al 100 de dos en dos se escribirá el siguiente bucle.
for(let i=0; i<=100;i+=2){
    console.log(`Numero: ${i}`);
}
// Continue | imprime el siguiente bucle, no imprime dos veces el mismo bucle.
for(let i=0; i<=10;i+=1){
    if(i == 5){
        console.log('Voy en el 5');
        continue;
    }
    console.log(`Numero: ${i}`);
}
// break | Rompe en el bucle especificado
for(let i=0; i<=20;i++){
    if(i == 12){
        console.log('Rompiendo en el 12');
        break;
    }
    console.log(`Numero: ${i}`);
}
// Si queremos contar descendentemente del 50 al 10 utilizaríamos este bucle.
for (i=50;i>=10;i--) {
    console.log(`Numero: ${i}`)
}
//if-else | con el operador %
for(i=0;i<=20;i++){
    if(i % 2 == 0) {
        console.log(`El numero ${i} es par.`);
    }else {
        console.log(`El numero ${i} es impar`);
    }
    continue;
}
//Arreglos .length
const arregloProductos = ['Polo','Guitarra','Teclado','Zapatos','Mesa','Computadora'];
for(let i = 0; i < arregloProductos.length; i++){
    console.log(`Tu producto ${arregloProductos[i]} fue agregado`);
}