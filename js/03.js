// for( let i = 0 ; i <= 100 ; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(`El numero ${i} fiss buzz`);
//     }
//     else if (i % 3 == 0) 
//         console.log(`El numero ${i} fiss`);
    
//     else if (i % 5 === 0)
//         console.log(`El numero ${i} buzz`);
    
// }


// let i = 0;

// while( i < 10) {

//     console.log(`numero ${i}`)
//     i++;
// }

// let i = 0;

// do {
//     console.log(`Número ${i}`)
// } while (i < 10);

const pendientes = ['Hola', 'Que', 'Tal', 'Como'];
const nuevoArreglo = pendientes.forEach( (pendiente) => console.log(pendiente))
pendientes.forEach( (pendiente, indice) => console.log(`${indice} : ${pendiente}`))

//map
pendientes.map(producto => console.log(producto)) // con map se puede definir en un nuevo arreglo

// for of
for (let pendiente of pendientes){
    console.log(pendiente)
}