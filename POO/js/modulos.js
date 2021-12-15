// (function(){
//     console.log('Desde un IIFE');
//     const nombreCliente = 'juan';
// }) ();



//PRoblema que si queres tener un codigo mas ordenado, no podes utilizar funciones en otro modulo, solo si le pones window adelante


//Export para poder utilizar en otro moduclo

export const nombreCliente = 'Juan';
export const ahorro = 200;


export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;

}

export function tieneSaldo(ahorro){
    if(ahorro > 0){
        console.log('Tiene saldo');
    }
    else{
        console.log('No tiene saldo');
    }
}

export class Cliente {
    constructor(nombre,ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`
    }
}


//Existe el export default también , no hace que este adentro ed las llaves cuando se este importando..

