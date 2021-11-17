//Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');  
const gastoListado = document.querySelector('#gastos ul');


//Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded',preguntarPresupuesto);

    formulario.addEventListener('submit',agregarGasto);
}

//Clases- Visualizar como quedaria la aplicacion para ver cuantas clases tenga 1 de presupeusto y otra del interfaz e usuario
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
    //agregando al arreglo cada gasto que vas agregando
    nuevoGasto(gasto){
        this.gastos = [...this.gastos,gasto]
    }
}

class UI {
    insertarPresupuesto(cantidad){
        //Extrayendo valores
        const {presupuesto, restante} = cantidad;

        //Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }
    

    imprimirAlerta(mensaje,tipo){
        const divAlerta = document.createElement('div');
        divAlerta.classList.add('text-center','alert');
        
        if(tipo === 'error'){
            divAlerta.classList.add('alert-danger');
        }else {
            divAlerta.classList.add('alert-success');
        }

        divAlerta.textContent = mensaje;

        //insertar HTML

        document.querySelector('.primario').insertBefore(divAlerta,formulario);

        //Quitar del HTML
        setTimeout(() => {
            divAlerta.remove();
        },3000);

    }
}

//Instanciar
const ui = new UI();
let presupuesto;



//Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload(); //recarga la pagina actual
    }

    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);
    ui.insertarPresupuesto(presupuesto);

    
}

function agregarGasto(e) {
    e.preventDefault();

    //Leer datos del form
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //Validar campos iniciales de nombre y cantidad
    if(nombre === '' ||cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios','error');
    }else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida','error')
    }
    else{
        ui.imprimirAlerta('Gasto agregado correctamente');
    }
    //Generar un objeto con el gastoe
    const gasto = {nombre, cantidad, id:Date.now()} ;

    presupuesto.nuevoGasto(gasto);
    
    
    

    //Limpia o resetea el formulario
    formulario.reset();

}