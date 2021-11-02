//Array Methods

const meses = ['Uno', 'Dos' , 'Tres' , 'Cuatro' , 'Cinco' , 'Seis'];

const carrito = [
    {nombre: 'Monitor 39 pulgadas' , precio:500},
    {nombre: 'Monitor 45 pulgadas' , precio:550},
    {nombre: 'Tablet 39 pulgadas' , precio:350,descuento: true},
    {nombre: 'PC 39 pulgadas' , precio:600},
    {nombre: 'Monitor 50 pulgadas' , precio:700}
]


//Comprobar si un valor existe

meses.forEach((mes) => {
    if(mes === 'Enero'){
        console.log(mes)
    }
    
});

//includes solo en un arreglo de indices
const resultado = meses.includes('Enero');
console.log(resultado);

//En un arreglo de objetos: some. Soporta arreglo de indice y arreglo de objetos

const existe = carrito.some(producto => {
    return producto.nombre === 'Monitor 39 pulgadas'
})

console.log(existe);

//FindIndex
const mesesDos = ['Enero', 'Febrero' , 'Marzo' , 'Abril' , 'Mayo' , 'Junio'];

const indice = mesesDos.findIndex (mes => mes == 'Febrero');
console.log(indice)

//reduce, filter
let resultadoNuevo;

resultadoNuevo = carrito.filter(producto => producto.precio > 590)
console.log(resultadoNuevo)
