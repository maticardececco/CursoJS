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
console.log(matias.mostrarInformacion());
console.log(Cliente.bienvenida());