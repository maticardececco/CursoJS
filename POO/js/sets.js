//Sets te permiten crear una lista de valores sin duplicados. Mas rapido caundo manejas muchos datos

const carrito = new Set();

carrito.add('Camisa');
carrito.add('dISCO2');
carrito.add('Camisa');


console.log(carrito.has('Camisa'));

//SE UTILIZA SIZE

console.log(carrito.size);

console.log(carrito);

//Para eliminar duplicados con set, es simple una linea de codigo instanciando ..
const numeros = [1,2,3,4,5,2,4,1];


const noDuplicados = new Set(numeros);

console.log(noDuplicados);

//El set almacenda cualquier todo tipo de valor,  el workset solo objetos.. El workset no es iterable, el set si

//Maps lista ordenada con llave y valor, cualquier tipo de dato
const cliente = new Map();

cliente.set('nombre','Karen');
cliente.set('tipo','premium');

console.log(cliente);

const paciente = new Map([ ['nombre','paciente'], ['cuarto','no definido']]);

console.log(paciente);
