//Selectores de imputs
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#nueva-cita');

const contenedorCitas = document.querySelector('#citas');


class Citas {
    constructor(){
        this.citas = [];

    }
    agregarCita(cita){
        this.citas = [...this.citas,cita];
        console.log(this.citas);
    }
}

class UI {
    imprimirAlerta(mensaje,tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert','d-block','col-12'); // col-12 para q ocupe todo el espacio

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');

        }else {
            divMensaje.classList.add('alert-success');
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));



        setTimeout(() => {
            divMensaje.remove();
        }, 5000);
    }
}

const ui = new UI();
const administrarCitas = new Citas();


eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('input',datosCita);
    propietarioInput.addEventListener('input',datosCita);
    telefonoInput.addEventListener('input',datosCita);
    fechaInput.addEventListener('input',datosCita);
    horaInput.addEventListener('input',datosCita);
    sintomasInput.addEventListener('input',datosCita);

    formulario.addEventListener('submit',nuevaCita);
    
}

//Tener el name definido en el html, que es l propiedad de los selectores, en este caso de los inputs.
//Tiene que haber un name con el mismo nombre de las propiedades del objeto que definimos, como el siguiente
const citaObj = {
    mascota:'',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//Agrega datos al objeto de cita
function datosCita(e) {
    //.name porque es el atributo del html
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);
}

//Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e) {
    e.preventDefault();

    const{ mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    //Validar
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ){
        //console.log('Todos los campos son obligatorios');
        ui.imprimirAlerta('Todos los cambios son obligatorios', 'error');
        return;
    }
    //generar un id unico
    citaObj.id = Date.now();



    administrarCitas.agregarCita(citaObj);
    //console.log(citaObj.id);


}