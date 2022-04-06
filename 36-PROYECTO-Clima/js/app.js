//Definir el container, el resultado para mostrar la temperatura y el formulario
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

//Evento de submit para cuando se manda el formulario
window.addEventListener('load', () => {
    formulario.addEventListener('submit',buscarClima);
})


function buscarClima(e) {
    e.preventDefault();

    //Validar el valor de los campos ciudad y pais
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;
 

    if(ciudad === '' || pais === ''){
        mostrarError('Ambos campos son obligatorios');
        return; //detenemos la ejecucion
    }

    //Consultar API
    consultarAPI(ciudad,pais);
}

function mostrarError(mensaje){
    
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta) {
        const alerta = document.createElement('div');

        alerta.classList.add('bg-red-100','border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto','mt-6','text-center');
    
        alerta.innerHTML = `
            <strong class="font-bold">ERROR</strong>
            <span class="block">${mensaje}</span>
        `;
    
        container.appendChild(alerta);
        //Se elimine despues de 5 segundos
        setTimeout(() => {
           alerta.remove(); 
        }, 4000);

    }

 
}

function consultarAPI(ciudad,pais){

    const appId = '671f6f0d950f2ae3b4f4243546f0178f';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    Spinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            limpiarHTML();
            if (datos.cod === '404') {
                mostrarError('Ciudad no encontrada');
                return;
            }
            //Imprime respuesta en HTML
            mostrarClima(datos);


        })
}

function mostrarClima(datos){

    const {name, main:{temp, temp_max, temp_min}} = datos;

    const centigrados = kelvinACentigrados(temp);
    const min = kelvinACentigrados(temp_min);
    const max = kelvinACentigrados(temp_max);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en: ${name}`;
    nombreCiudad.classList.add('font-bold','text-6xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451`;
    actual.classList.add('font-bold','text-6xl');
    
    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `Max: ${max} &#8451`;
    tempMaxima.classList.add('text-xl');

    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `Min: ${min} &#8451`;
    tempMinima.classList.add('text-xl');


    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center','text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);
    

    resultado.appendChild(resultadoDiv);


}

const kelvinACentigrados = grados => parseInt(grados - 273.15);


function limpiarHTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


function Spinner() {

    limpiarHTML();
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
    <div class="sk-circle">
    <div class="sk-circle1 sk-child"></div>
    <div class="sk-circle2 sk-child"></div>
    <div class="sk-circle3 sk-child"></div>
    <div class="sk-circle4 sk-child"></div>
    <div class="sk-circle5 sk-child"></div>
    <div class="sk-circle6 sk-child"></div>
    <div class="sk-circle7 sk-child"></div>
    <div class="sk-circle8 sk-child"></div>
    <div class="sk-circle9 sk-child"></div>
    <div class="sk-circle10 sk-child"></div>
    <div class="sk-circle11 sk-child"></div>
    <div class="sk-circle12 sk-child"></div>
    </div>
    `
    resultado.appendChild(divSpinner);
}
