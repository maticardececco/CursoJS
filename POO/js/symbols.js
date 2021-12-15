// //Symbols permite crear una propiedad unica, no hay 2 symbols que sean iguales
// const sym = Symbol();
// const sym2 = Symbol();

// if (sym === sym2){
//     console.log('Son iguales')
// }else {
//     console.log('Son diferentes')
// }

// const nombre = Symbol();
// const apellido = Symbol();

// const persona = {};

// persona[nombre] = 'Matias';
// persona[apellido] = 'Carrera';
// persona.tipo = 'Nuevo';
// persona.saldo = 800;

// console.log(persona);




// //Un symbol no es iterable

// for (let i in persona){
//     console.log(i);
// }
//Definir una nueva clase para 

//IndexedDB, base de datos del navegador, en inspeccionar, almacenamiento

document.addEventListener('DOMContentLoaded', () => {
    crmDB();
})

function crmDB() {
    let crmDB = window.indexedDB.open('crm',1);

    crmDB.onerror = function () {
        'Hubo un error a la hora de crear la BD'
    }


    crmDB.onsuccess = function() {
        console.log('Base de datos creada!');
    }

}