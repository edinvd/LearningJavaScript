// ### Swith ####
// Es como if else | case es como if  y  break como else


const metodoPago = 'Bitcoins';
switch (metodoPago) {
    case 'Efectivo':
        console.log(`El usuario pago con ${metodoPago}`)
        break;
    case 'PayPal':
        console.log(`El usuario pago con ${metodoPago}`)
        break;
    case 'Tarjeta':
        console.log(`El usuario pago con ${metodoPago}`)
        break;
    default:
        console.log('Metodo no aceptado')
        break;
};

//
let mes;
switch(new Date().getMonth()) {
    case 0:
        mes = 'Enero';
        break;
    case 1:
        mes = 'Febrero';
        break;
    case 2:
        mes = 'Marzo';
        break;
    case 3:
        mes = 'Abril';
        break;
    case 4:
        mes = 'Mayo';
        break;
    case 5:
        mes = 'Junio';
        break;
    case 6:
        mes = 'Julio';
        break;
    case 7:
        mes = 'Agosto';
        break;
    case 8:
        mes = 'Septiembre';
        break;
    case 9:
        mes = 'Octubre';
        break;
    case 10:
        mes = 'Noviembre';
        break;
    case 11:
        mes = 'Diciembre';
        break;
};

console.log(`Este mes es ${mes}`);

//
let hora;
switch(new Date().getHours()){
    case 0:
        hora = 0;
        break;
    case 1:
        hora = 1;
        break;
    case 2:
        hora = 2;
        break;
    case 3:
        hora = 3;
        break;
    case 4:
        hora = 4;
        break;
    case 5:
        hora = 5;
        break;
    case 6:
        hora = 6;
        break;
    case 7:
        hora = 7;
        break;
    case 8:
        hora = 8;
        break;
    case 9:
        hora = 9;
        break;
    case 10:
        hora = 10;
        break;
    case 11:
        hora = 11;
        break;
    case 12:
        hora = 12;
        break;
    case 13:
        hora = 13;
        break;
    case 14:
        hora = 14;
        break;
    case 15:
        hora = 15;
        break;
    case 16:
        hora = 16;
        break;
    case 17:
        hora = 17;
        break;
    case 18:
        hora = 18;
        break;
    case 19:
        hora = 19;
        break;
    case 20:
        hora = 20;
        break;
        case 21:
            hora = 2;
        break;
        case 22:
            hora = 2;
        break;
        case 23:
            hora = 2;
        break;
        case 24:
            hora = 2;
        break;

};

console.log(`La hora es ${hora}`);

// Minutos
let minutos;
switch(new Date().getMinutes()){
    case 0:
        minutos = 0;
        break
        //...sucesivamente

    case 5:
        minutos = 5;
        break
    case 6:
        minutos = 6;
        break
};
console.log(`La hora es ${hora} minutos son ${minutos}`);