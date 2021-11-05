//Variables

const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', inicioApp);

    //campos del formulario
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);


    //Enviar email
    formulario.addEventListener('submit',enviarEmail);
}



//Funciones

function inicioApp() {
    // deshabilitar el envio
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}

function validarFormulario(e) {

   
    
   if(e.target.value.length > 0) {

    //Eliminar errores
    const error = document.querySelector('p.error');
    if(error){
        error.remove();
    }
    

    e.target.classList.remove('border', 'border-red-500');
    e.target.classList.add('border', 'border-green-500');
    
   }

   else {
       //e.target.style.borderBottomColor = 'red';
       //alert("No se ha ingresado el mail");
       e.target.classList.add('border', 'border-red-500');

       mostrarError('Todos los campos son obligatorios');
   }
   if(e.target.type === 'email'){
    //Expresión rgular   
   
       if (er.test(e.target.value)){

            const error = document.querySelector('p.error');
            if (error){
                error.remove();
            }
            

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
       }else {
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
           mostrarError('Email no válido');
       }
   }

   if(er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
       console.log("Pasaste la validacion")
       btnEnviar.disabled = false;
       btnEnviar.classList.add('cursor-not-allowed','opacity-50')
   }
   
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border','border-red-500','background-red-100','text-red','p-3','mt-5','text-center',
    'error'); //hay q agregarlo al hmtl al form

    const errores = document.querySelectorAll('.error');

    if (errores.length === 0){
        formulario.appendChild(mensajeError);

    }
}


function enviarEmail(e) {
    e.preventDefault()

    console.log('Enviando');


    
}

