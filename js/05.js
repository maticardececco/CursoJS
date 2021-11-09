function Player(name,apellido){
    this.name = name,
    this.apellido = apellido
    this.sayName = function() {
        console.log(`Su nombre es: ${name}, ${apellido}`)
    }
}

const player1 = new Player('Matias','Carrera');
player1.sayName();

function Libro(nombre,editorial,paginas){
    this.nombre = nombre,
    this.editorial = editorial,
    this.paginas = paginas,
    this.info = function() {
        console.log(`${nombre} por editorial ${editorial} con una cantidad de paginas de ${paginas}`)
    }
}

const Hobbit = new Libro('Hobbit','Nuevo Mundo',665);
Hobbit.info();

function Estudiante(nombre,grado){
    this.nombre = nombre,
    this.grado = grado
}

Estudiante.prototype.info = function () {
    console.log(this.nombre)
}

const auto = {
    nombre: '',
    modelo: '',
    año: ''
}

function Auto(nombre, modelo, año){
    this.nombre = nombre,
    this.modelo = modelo,
    this.año = año
}

Auto.prototype.info = function () {
    console.log(this.nombre);
}

