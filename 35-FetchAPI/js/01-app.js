//con fetch API podes enviar o recibir datos, utiliza promises

const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click',obtenerDatos);


function obtenerDatos() {
    fetch('data/daetos.txt')
        .then(respuesta => {
            console.log(respuesta);

        return respuesta.text();
        })
        //una vez que tengo la respuesta quiero lo q viene de ese archivoi
        .then(datos => {
            console.log(datos);
        })
        .catch(error => {
            console.log(error);
        })
}




