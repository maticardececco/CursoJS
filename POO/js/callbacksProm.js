// Promises, callbacks y programación asincrona en JS
//callback es util 

// const paises = ['Francia','España','Portugal','Inglaterra'];

// function nuevoPais(pais,callback) {
//     setTimeout(() => {
//         paises.push(pais);
        
//     }, 2000)
// }


// function mostrarPaises() {
//     setTimeout(() =>{
//         paises.forEach(pais => {
//             console.log(pais)
//         });
//     }, 1000);
// }
// //no utilizar demasiado 

// mostrarPaises();

// nuevoPais('Argentina', mostrarPaises);


//Ejemplo N°2 es utilizar mal y mucho los callback... Promise dan una sintáxis mas clara

// const paises = [];

// function nuevoPais(pais, callback) {
//     paises.push(pais);
//     console.log(`Agregado: ${pais}`);
//     callback();
// }

// function mostrarPaises() {
//     console.log(paises)


// }


// function iniciarCallbackHell() {
//     setTimeout(() => {
//         nuevoPais('Alemania',mostrarPaises);
//     }, 3000);
// }

// iniciarCallbackHell();




//------------------Ejemplo 3  Promisses. Resolve es lo que se ejecuta cuando el promise se cumple, y reject cuando tenemos un error en el prmose

// const aplicarDescuento = new Promise((resolve,reject) => {
//     const descuento = true;

//     if(descuento) {
//         resolve('Descuento Aplicado')
//     }else {
//         reject('No se pudo aplicar el descuento')
//     }
// })

// //THEN ES LA ACCION QUE SE REALIZA UNA VEZ QUE SE EFECTUA EL PROMISSE, y si no se cumple tenes el catch, se puede llamar a otras funciones despues del .then tambien
// aplicarDescuento
//     .then(resultado => descuento(resultado))
//     .catch(error => console.log(error))




// //Hay 3 valores posibles
// //fulfilled - El promise se cumplió
// // rejected - el promise no se cumplió
// // pending -- aun no se cumple, ni tampoco ha sido rechazado

// function descuento(mensaje){
//     console.log(mensaje);
// }



//----------------Ejemplo 4, llevar callbackhell a promise

const paises = [];

const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${pais}`)
    }, 3000);
})


nuevoPais('Alemania')
.then(resultado => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais('Francia');
} )
.then(resultado => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais('Argentina');
})
.then((resultado) => 
    console.log(resultado))
    