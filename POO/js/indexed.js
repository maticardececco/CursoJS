let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
})


function crmDB() {
    let crmDB = window.indexedDB.open('crm', 1);


    //Si hay un error
    crmDB.onerror = function () {
        console.log('Hubo un error a la hora de crar la BD');
    }

        //sI SE CREO BIEN
        crmDB.onsuccess = function() {
            console.log('Base de datos creada');
            DB = crmDB.result;
        }

        crmDB.onupgradeneeded = function (e) {
            const db = e.target.result;
            
            const objectStore = db.createObjectStore('crm', {
                keyPath: 'crm',
                autoIncrement: true
            })

            // Definir las columnas
            objectStore.createIndex('nombre','nombre', {unique:false});
            objectStore.createIndex('email','email', {unique:true});
            objectStore.createIndex('telefono','telefono', {unique:false});

            console.log('Columnas creadas');

        }

}

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');
    transaction.oncomplete = function () {
        console.log("transaccion completada");

    transaction.onerror = function() {
        console.log('hubo un error en la base de datos');
    }


    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 32423443,
        nombre: 'Juan',
        email: 'djskdskd@wsd.com'

    }

    //mal definido el objectStore, porque no muestra nada después.    
    const peticion = objectStore.add(nuevoCliente);
    
 }
}



