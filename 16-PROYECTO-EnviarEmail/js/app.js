//Variables

const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const btnReset = document.querySelector('#resetBtn');

//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

//Expresión regular sacada de interny
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', inicioApp);

    //campos del formulario
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);

    //Enviar mail 
    formulario.addEventListener('submit',enviarEmail);
    
 
}



//Funciones

function inicioApp() {
    // deshabilitar el envio
    btnEnviar.disabled = false;
    btnEnviar.classList.add('opacity-100');

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
    //mostrar
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex'
    //spinner.style.display = 'flex'
    
    //Despues de 3 seg. Existen dos funciones de JS setTimeOut(se ejecuta una sola vez) y setInterval (lo hace cada tanto tiempo..)
    setTimeout(() => 
    {
        spinner.style.display = 'none';
        //console.log("Ejecuta después de los 3 segundos");
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envió correctamente';
        parrafo.classList.add('text-center','my-10','p-5','bg-green-500','uppercase');

        //local persiste y session localStorage. Defin

        //Inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo,spinner);
        setTimeout(() => 
        {
            parrafo.remove();
            resetearFormulario();
        },5000)

    } , 3000);

       
}
//funcion que resetea el formulario

function resetearFormulario() {
    formulario.reset();

    inicioApp();
    
}