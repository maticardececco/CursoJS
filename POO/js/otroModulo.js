import { nombreCliente,ahorro,mostrarInformacion, tieneSaldo, Cliente} from './modulos.js';


console.log(nombreCliente);

console.log(ahorro);

console.log(mostrarInformacion('Juan',400));

console.log(tieneSaldo(200));

const cliente = new Cliente(nombreCliente,ahorro);

console.log(cliente.mostrarInformacion());


