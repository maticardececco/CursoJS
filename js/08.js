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


//INstanciarlo
const pedro = new Cliente('Pedro',6000);
console.log(pedro.tipoCliente());
console.log(pedro);

pedro.retiraSaldo(1000);
console.log(pedro.nombreClienteSaldo());

