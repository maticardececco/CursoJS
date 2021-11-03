// for( let i = 0 ; i < 200 ; i++ ) {
//     console.log(`Numero de la vuelta: ${i}`)
// }

const carrito = [
    {nombre: 'Monitor 39 pulgadas' , precio:500},
    {nombre: 'Monitor 45 pulgadas' , precio:550},
    {nombre: 'Tablet 39 pulgadas' , precio:350,descuento: true},
    {nombre: 'PC 39 pulgadas' , precio:600},
    {nombre: 'Monitor 50 pulgadas' , precio:700}
]

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento `);
        continue;
    }
    console.log(carrito[i].nombre);
}

