//Leer Json de un solo objeto
// const btncargarJSON = document.querySelector('#cargarJSON');
// btncargarJSON.addEventListener('click',mostrarJSON);


// function mostrarJSON() {
//     fetch('data/empleado.json')
//         .then(respuesta => respuesta.json())
//         .then(datos => mostrarEnHtml(datos))
// }

// function mostrarEnHtml({id, nombre, empresa, trabajo}){
//     const contenido = document.querySelector('.contenido');
//     contenido.innerHTML = `
//         <p>Id: ${id} </p>
//         <p>Nombre: ${nombre} </p>
//         <p>Empresa: ${empresa} </p>
//         <p>Trabajo: ${trabajo} </p>

//     `
// }

//Leer Json con varios objetos - array
const btncargarJSONArray = document.querySelector('#cargarJSONArray')
btncargarJSONArray.addEventListener('click',mostrarArray);

function mostrarArray() {
    fetch('data/empleados.json')
        .then(respuesta => respuesta.json())
        .then(datos => mostrarEnHtml(datos))
    }

function mostrarEnHtml(empleados){
    const contenido = document.querySelector('.contenido');
    let html = '';
    empleados.forEach(empleado => {
        
        const {id, nombre, empresa, trabajo} = empleado;
        
        html += `
            <p>Id: ${id}</p>
            <p>Nombre: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `
        contenido.innerHTML = html;

        
    });
}

//Leer datos de una API
const cargarAPIbtn = document.querySelector('#cargarAPI');
cargarAPIbtn.addEventListener('click',mostrarDatosAPI);

function mostrarDatosAPI(){
    fetch('https://picsum.photos/list')
        .then(respuesta =>{
            console.log(respuesta)
            return respuesta.json()
        })
        .then(resultado => {
            mostrarHTML(resultado);
        })
}

function mostrarHTML(datos){
    const contenido = 
    document.querySelector('.contenido');

    let html = "";

    datos.forEach(perfil => {
        const {author, post_url} = perfil;

        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}" > Ver Imagen</a>

        `
    });

    contenido.innerHTML = html;
}



