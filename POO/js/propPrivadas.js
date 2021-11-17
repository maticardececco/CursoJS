//Propiedades privadas en JS
class Cliente {
    #nombre; //es privada solo accede desde la clase

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
        return 'Bienvenid@ al cajero';
    }
    

}




