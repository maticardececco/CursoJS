//Programación Orientada a Objetos en JavaScript
//Se aplica con prototypes pero se crean de manera mas sencilla

class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    //Metodos se van agregando al prototype
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    //pertenece a la clase, no pertenece al objeto, no requiere una instancia, se llama desde la clase
    static bienvenida(){
        return 'Bienvenid@ al cajero'
    }
}

const matias = new Cliente('Matias',4000);

//Herencia, hereda atributos y metodos del padre
class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,categoria){
        super(nombre,saldo);
        this.telefono =  telefono;
        this.categoria = categoria;
    }
    //Si hay un metodo q se llame igual, llama a este
    static bienvenida(){
        return 'Bienvenid@ al cajero de empresas'
    }
}

const empresa = new Empresa('Nuevo Código',5000,4712407,'Nuevo');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());

console.log('sdsdds');