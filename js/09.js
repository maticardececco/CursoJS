function Cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

//Definimos metodos exclusivos de Cliente
//fUCNTION buscan en el mismo objetvo, y el arrow function siempre busca en la ventana global
Cliente.prototype.tipoCliente = function () {
    let tipo;
    if(this.saldo > 10000) {
        tipo = 'Gold';
    }else if (this.saldo > 5000){
        tipo = 'Platinum';
    }else {
        tipo = 'Normal';

    }
    return tipo;
    
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}



//heredarlos
function Persona(nombre,saldo,telefono){
    Cliente.call(this,nombre,saldo); //heredamos el constructor de cliente;
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);  //pasar prototype de cliente a persona 

Persona.prototype.constructor = Cliente;

//Instaciarlo
const juan = new Persona('juan',5000,135434);
console.log(juan.nombreClienteSaldo());

