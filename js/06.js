let myLibrary = [{
    nombre:'Nuevo',
    año: 1563,
    paginas: 3228,
    editorial:'Nueva Mundo'
},
{
    nombre:'Nuevo',
    año: 1563,
    paginas: 3228,
    editorial:'Nueva Mundo'
},
{
    nombre:'Nuevo',
    año: 1563,
    paginas: 3228,
    editorial:'Nueva Mundo'
},
{
    nombre:'Nuevo',
    año: 1563,
    paginas: 3228,
    editorial:'Nueva Mundo'
},
];

function Book(nombre, año, paginas, editorial){
    this.nombre = nombre,
    this.año = año,
    this.paginas = paginas,
    this.editorial = editorial
}

const libro = new Book('Nuevo',1563,3228,'Nueva Mundo');
const libro2 = new Book('Nusdddevo',1956,532288,'Nea Editorial');
const libro3 = new Book('DJo',1856,322,'Nueva Editorial');
const libro4 = new Book('Otro',1855,233,'Nueva Editorial');

myLibrary.push(libro4);


function addBookToLibrary() {
    for(let i = 0; i < myLibrary.length ; i++){
        console.log(myLibrary[i]);
    }
}

addBookToLibrary();

//colocar datos
localStorage.setItem('nombre','Nuevo nombre');

//consultar
const nombre = localStorage.getItem('nombre');
console.log(nombre);

//eliminar
localStorage.removeItem('nombre');

//Actualizar registro


