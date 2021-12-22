//leer un array
const cargarJSONArraybtn = document.querySelector('#cargarJSONArray');
cargarJSONArraybtn.addEventListener('click',leerArray);


function leerArray() {
    fetch('data/empleados.json')
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado));
}

function mostrarHTML(empleados){
    const contenido = document.querySelector('.contenido');
    let html = '';

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado;

        html += `
        <p>Empleado: ${nombre}</p>
        <p>Id: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        `;
    });

    contenido.innerHTML = html;

}