function descargarClientes() {
    return new Promise((resolve,reject)=> {
        const error = true;

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
//Declaretion
// async function ejecutar(){

// } 

//Expresion
//Siempre el await puede utilizarse en funciones asyncronas, 
const ejecutar = async () => {
    try{
        const respuesta = await descargarClientes(); //await bloquea la ejecución del código
        console.log(4);
        console.log(respuesta);
    }catch(error) {
        console.log(error);
    }
}

ejecutar();