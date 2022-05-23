function descargarClientes() {
    return new Promise((resolve,reject)=> {
        const error = false;

        setTimeout(() => {
           if(!error){
               resolve('El listado de clientes se descargó correctamente');
           } 
           else {
               reject('error en la ejecución')
           }
        }, 3000);


    })
}

//Siempre el await puede utilizarse en funciones asyncronas, 
async function ejecutar() {
    try{
        const respuesta = await descargarClientes(); //await bloquea la ejecución del código
        console.log(4);
        console.log(respuesta);
    }catch(error) {
        console.log(error);
    }
}

ejecutar();