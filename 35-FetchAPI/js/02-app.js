// const cargarJsonBtn = document.querySelector('#cargarJSON');
// cargarJsonBtn.addEventListener('click',obtenerDatos);

// function obtenerDatos() {
//     fetch('data/empleado.json')
//         .then(respuesta => respuesta.json())
//         .then(resultado => mostrarHTML(resultado))
// }

function mostrarHTML({empresa, id, nombre, trabajo}){
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
    <p>Empleado: ${nombre} </p>
    <p>ID: ${id} </p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo} </p>
    `
}


//leer datos de JSON 
const cargarJSONbtn = document.querySelector('#cargarJSON');
cargarJSONbtn.addEventListener('click',mostrarDatos);

function mostrarDatos() {
    fetch('data/empleado.json')
        .then(respuesta => respuesta.json())
        .then(datos => mostrarHTML(datos))
  
}

function mostrarHTML({id,empresa,trabajo,nombre}){
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
    <p>Nombre: ${nombre} </p>
    <p>Empresa: ${empresa}</p>
    `

}