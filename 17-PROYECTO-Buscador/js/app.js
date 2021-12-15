//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Cotnenedor para los resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

//generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}




document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);  //muestra todos los autos que hay en el otro archi

    //Llena las opciones de años
    llenarSelect();
})

//Event Lsitener para los select de bsuqueda
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();

});
year.addEventListener('change',(e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});
minimo.addEventListener('change',(e) => datosBusqueda.minimo = e.target.value);
maximo.addEventListener('change', (e) => datosBusqueda.maximo = e.target.value);
puertas.addEventListener('change', (e) => datosBusqueda.puertas = e.target.value);
transmision.addEventListener('change', (e) => datosBusqueda.transmision = e.target.value);
color.addEventListener('change', (e) =>  datosBusqueda.color = e.target.value)



function mostrarAutos(autos) {
   
    limpiarHTML();

    autos.forEach(auto => {
        const autoHTML = document.createElement('p');

        const{marca, modelo, year, puertas, transmision, precio, color} = auto;
        autoHTML.textContent = `
        ${marca}-${modelo}-${year}-${puertas}-${transmision}-${precio}-${color}
        `;
        resultado.appendChild(autoHTML);
    })

}

const limpiarHTML2

function limpiarHTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//Generar los años del select

function llenarSelect() {
    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.append(opcion);
        
    }
}

//funcion que filtra en base a la busqueda 
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);
    

    mostrarAutos(resultado);
    

}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }
    return auto; //traigo todos de regreso

}
function filtrarYear(auto) {
    const {year} = datosBusqueda;
    
    if(year){
        return auto.year === year;
    }
    return auto; //traigo todos de regreso
}

