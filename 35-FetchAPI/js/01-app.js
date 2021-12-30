//con fetch API podes enviar o recibir datos, utiliza promises

// const cargarTxtBtn = document.querySelector('#cargarTxt');
// cargarTxtBtn.addEventListener('click',obtenerDatos);


// function obtenerDatos() {
//     fetch('data/datos.txt')
//         .then(respuesta => {
//             console.log(respuesta);

//         return respuesta.text();
//         })
//         //una vez que tengo la respuesta quiero lo q viene de ese archivoi
//         .then(datos => {
//             console.log(datos);
//         })
//         //para saber donde está el error
//         .catch(error => {
//             console.log(error);
//         })
// }

//Obtener info de un JSON y mostrarlo por consola


const btncargarJSONArray = document.querySelector('#cargarJSONArray');
btncargarJSONArray.addEventListener('click', visualizarArray);

function visualizarArray() {
    fetch('data/empleados.json')
        .then(respuesta => respuesta.json())
        .then(datos => mostrarDatosHTML(datos))
}

function mostrarDatosHTML(empleados){
    const contenido = document.querySelector('.contenido');
    let html;
    empleados.forEach(empleado => {
        const {id, empresa, nombre, trabajo} = empleado;
        html += `
            <p>Id: ${id} </p>
            <p>Empresa: ${empresa} </p>
            <p>Nombre: ${nombre} </p>
            <p>Trabajo: ${trabajo} </p>
        `;

        contenido.innerHTML = html;        
    });
}

























