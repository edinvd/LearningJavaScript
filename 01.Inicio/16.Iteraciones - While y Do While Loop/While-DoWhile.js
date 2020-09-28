// ### While-DoWhile ###
// While
/* let i = 0;
while(i < 10){
    
    if(i === 5){
        console.log('Cinco');
        i++;
        continue;
    }
    console.log(`Numero: ${i}`);
    i++;
} */

// While
/* let musica = ['Cancion 1', 'Cancion 2', 'Cancion 3'];

let i = 0;
while (i < musica.length){
    console.log(`Reproduciendo la canción: ${musica[i]}`);
    i++
}
 */
//Do While
let i = 1000; // Cambiamos 0 por 1000, de igual forma esta correra una vez, imprimiendo 1000
do {
    console.log(`Numero: ${i}`);
    i++;
} while(i<10);