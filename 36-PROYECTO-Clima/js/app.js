const container = document.querySelector('.container');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', enviarAPI);
})

function enviarAPI(e){
    e.preventDefault();

    const pais = document.querySelector('#pais').value;
    const ciudad = document.querySelector('#ciudad').value;

    console.log(pais);
    console.log(ciudad);

    if(pais === '' || ciudad === ''){
        mostrarError('Todos los campos son necesarios');

        return;
    }

    consultarAPI(pais, ciudad)
    //traerDatosApi(pais,ciudad)
}

function mostrarError(mensaje) {
    console.log(mensaje);

    const alerta = document.createElement('div')

    alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded',
    'max-w-md','mx-auto','mt-6','text-center');
    alerta.innerHTML = `
    <strong class ="font-bold"> Error! </strong>
    <span>${mensaje}</span>
    `
    container.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 4000);
    
    
}

function consultarAPI(pais,ciudad){
    const appId = 'faf3392a9bf98d4c7adde9c5feea3094';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
    
    //mostrar spinner de carga porque aca comienza a consultar al serve, antes del fetch
    Spinner();
    
    //console.log(url);
    fetch(url)
    .then(respuesta => respuesta.json())
    
    
    .then(datos => {
        limpiarHTML();
        if(datos.cod === "404") {
            mostrarError('Ciudad no encontrada')
            return;
        }
        mostrarClima(datos);
    })

}

function mostrarClima(datos){
    const {name,main:{temp, temp_max, temp_min}} = datos;

    const centigrados = kelvinACentigrados(temp);
    const min = kelvinACentigrados(temp_min);
    const max = kelvinACentigrados(temp_max);
    //console.log(temp - 273.15);
    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en: ${name}`;
    nombreCiudad.classList.add('font-bold','text-2xl');
    //Scripting crear elemento
    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`
    actual.classList.add('font-bold','text-6xl');

    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `Max: ${max} &#8451;`
    tempMaxima.classList.add('text-xl');

    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `Min: ${min} &#8451;`
    tempMinima.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center','text-white');
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);

    resultado.appendChild(resultadoDiv);
}

const kelvinACentigrados = grados => parseInt(grados - 273.15);


//Limpiar el HTML para cuando se consulta otra ciudad no muestre las emperatururas abajo de la otra
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function Spinner(){
    limpiarHTML();
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner');

    divSpinner.innerHTML = `
    
    
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
    

    `;
    resultado.appendChild(divSpinner);

    
}