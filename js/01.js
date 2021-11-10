console.log("-----------------");

// for( let i = 0 ; i < 200 ; i++ ) {
//     console.log(`Numero de la vuelta: ${i}`)
// }

// for (let i = 0 ; i < 20 ; i++) {
//     if(i % 2 === 0 ){
//         console.log(`El numero ${i} es par`)
//     }
//     else {
//         console.log(`El numero ${i} es impar`)
//     }

// }


const carrito = [
    {nombre: 'Monitor 39 pulgadas' , precio:500},
    {nombre: 'Monitor 45 pulgadas' , precio:550},
    {nombre: 'Tablet 39 pulgadas' , precio:350,descuento: true},
    {nombre: 'PC 39 pulgadas' , precio:600},
    {nombre: 'Monitor 50 pulgadas' , precio:700},
]


for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre)
}

