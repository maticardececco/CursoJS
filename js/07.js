//Prototypes- Todos los objetos tienen un prototype

const cliente = {
    nombre: 'Matias',
    saldo: 600
}

console.log(cliente);
console.log(typeof cliente);


//Objeto reutilizable con objetc constructor - ObjectConstructor

function Cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan',200);

console.log(juan);

//Prototypes

function formatearCliente(cliente) {
    const {nombre,saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}


function formatearEmpresa(empresa) {
    const {nombre,saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y una categoria: ${categoria}`;
}


console.log(formatearCliente(juan));

function Empresa(nombre,saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo',4000,'Cursos en Linea');
console.log(formatearEmpresa(CCJ));