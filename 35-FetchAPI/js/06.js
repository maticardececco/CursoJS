const btncargarAPI = document.querySelector('#cargarAPI')
btncargarAPI.addEventListener('click', mostrarDatosAPI);

function mostrarDatosAPI() {
    fetch('https://picsum.photos/list')
    //darle forma a la API
        .then(respuesta => respuesta.json())
        .then(datos => verHTML(datos));
    
}

function verHTML(datos) {
    const contenido = document.querySelector('#contenido');
    let html = '';
    datos.forEach(dato => {
        const {author, post_url} = dato
        html += `
        <p>Autor: ${author} </p>
        <a href="${post_url}" >Ver imagen</a>
        `
    });
    contenido.innerHTML = html; 
}