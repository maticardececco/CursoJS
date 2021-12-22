//leer datos de api y cargar. Consumir una api y mostrar la respuesta

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
    const contenido = document.querySelector('.contenido');

    let html = "";

    datos.forEach(perfil => {
        const {author, post_url} = perfil;

        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blanck"> Ver Imagen</a>
        `
    });

    contenido.innerHTML = html;
}