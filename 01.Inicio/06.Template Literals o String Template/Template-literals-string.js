// ### Template Literals o String ####

const producto1 = 'Pizza',
      precio1 = 30;
      producto2 = 'Hamburguesa',
      precio2 = 12.99;  

let html;

// Vieja Forma de hacer template
html =  '<h2>Ordenes: ' + '</h2>' +
        '<ul>' +
        '<li>Orden: ' + producto1 + '</li>' +
        '<li>Precio: ' + precio1 + '</li>' +
        '<li>Orden: ' + producto2 + '</li>' +
        '<li>Precio: ' + precio2 + '</li>' +
        '<li>Total: ' + (precio1 + precio2).toFixed(2) + '</li>' +
        '</ul>';

// Nueva forma de hacer template
html =  `
        <ul>
            <li>Orden: ${producto1} </li>
            <li>Precio: ${precio1} </li>
            <li>Orden: ${producto2} </li>
            <li>Precio: ${precio2} </li>
            <li>Total: ${(precio1 + precio2).toFixed(2)} 
            </li>
        </ul>
        `
function Total(precio1,precio2){
    return precio1 + precio2;
}

document.getElementById('app').innerHTML = html;