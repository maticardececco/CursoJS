//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


//Event Listneers
eventListeners();

function eventListeners() {
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit',agregarTweet);

    //cuando el doc esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];
        //console.log(tweets);
        crearHTML();
    })
}



//Funciones

function agregarTweet(e) {
    e.preventDefault();
    
    //texarea
    const tweet = document.querySelector('#tweet').value;

    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio');
        return; //evita que se ejecuten mas lineas de codigo
    }
    
    const tweetObj = {
        id: Date.now(),
        tweet
    }
    //Añadir al arreglo de tweets
    tweets = [...tweets,tweetObj];
    
    //Una vez agregado vamos a crear el HTML
    crearHTML();

    //reiniciar formulario
    formulario.reset();
}

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertando el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 3000);


}

//Muestra LISTADO de tweets

function crearHTML() {
    limpiarHTML();

    if(tweets.length > 0 ){
        tweets.forEach(tweet => {

            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //crear html
            const li = document.createElement('li');

            //añadir el texto
            li.innerText = tweet.tweet;

            //asignar el boton
            li.appendChild(btnEliminar);

            //insertar en el html
            listaTweets.appendChild(li);
        })
    }
    sincronizarStorage();


}


//Agregar los tweets actuales al localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets',JSON.stringify(tweets));
   
}

function borrarTweet(id) {
    //console.log("Borrando tweet", id);
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML();
}

//Limpiar el html
function limpiarHTML() {
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);

    }
}

