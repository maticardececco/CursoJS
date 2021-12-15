//generador,m siempre lleva un asterisco antes del nombre de la funcion

// function *crearGenerador() {
//     //Yield valoresa q se puieden iterar
//     yield 1;
//     yield 'Juan';
//     yield 36+3;
//     yield true;




// }

// const iterador = crearGenerador();

// // cada next recorre los yields
// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next().done);
// console.log(iterador.next().value);

//Generador para carrito de compras

function *generadorCarrito(carrito){
    for (let i = 0 ; i < carrito.length; i++){
        yield carrito[i];
    }
}

const carrito = ['Producto 1','Producto 2','Producto 3'];

const iterador = generadorCarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());