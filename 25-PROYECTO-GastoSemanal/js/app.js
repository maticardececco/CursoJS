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
        this.gastos = [...this.gastos,gasto];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0  );
        this.restante = this.presupuesto - gastado;
    }
    eliminarGasto(id) {
        this.gastos = this.gastos.filter( gasto => gasto.id !== id);
        this.calcularRestante();
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
        },3000);800

       

    }
    mostrarGastos(gastos) {
        this.limpiarHTML();
        //Iterar
        gastos.forEach( gasto => {
            const {cantidad, nombre, id} = gasto;

            //Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            //nuevoGasto.setAttribute('data-id',id);
            nuevoGasto.dataset.id = id;

            //Agregar html del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> ${cantidad} </span>`;

            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn','btn-danger','borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);


            gastoListado.appendChild(nuevoGasto); //appendChild no borra los registros o HTML previo



            //Boton para borrar el gasto3000




        } 
            )
    }
    limpiarHTML() {
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }
    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }
    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante } = presupuestoObj;
        
        const restanteDiv = document.querySelector('.restante');
        //comprobar 25%
        if((presupuesto/4) > restante) {
            restanteDiv.classList.remove('alert-success','alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if((presupuesto/2) > restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');  
        }else {
            restanteDiv.classList.remove('alert-danger','alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        //Si el total es 0 o menor
        if(restante <= 0 ) {
            ui.imprimirAlerta('El presupuesto se ha agotado','error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
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
    
    //Imprimit los gastos
    const {gastos, restante} = presupuesto;

    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    
    ui.comprobarPresupuesto(presupuesto); //comprobamos lo q hemos gastado junto al presupuesto


    //Limpia o resetea el formulario
    formulario.reset();

}

function eliminarGasto(id){
    //Elimina del objeto
    presupuesto.eliminarGasto(id);

    //Elimina los gastos del HTML
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);
    
    ui.comprobarPresupuesto(presupuesto); 

}