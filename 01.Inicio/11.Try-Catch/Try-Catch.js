// ### Try Catch ####

// El try Catch - Es usado para ver si una funcion existe y si esta creada correctamente de ser asi esta correra sin interrupir a otras funciones que trabajan correctamente, de ser lo contrario esta devolvera con un mensaje de error, y de igual forma permitira que otras funciones trabajen sin tener que interrumpirlas pero sabriamos que dicha funcion estaria mal o no creada.
try {
    algo();
} catch (error) {
    console.log('Error!')//Mensaje personalizado de error.
} finally{
    console.log('El finally se ejecutara haya o no haya error')
}



// No importa en donde llamemos la funcion, puedes ser antes de tenerla creada o despues de crearlo
obtenerClientes(); // Llamado de la funcion

function obtenerClientes(){
    console.log('Descargando...');

    setTimeout (function() {
        console.log('Completo');
    }, 3000);
}
