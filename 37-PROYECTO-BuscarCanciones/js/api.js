import * as UI from './interfaz.js';

class API {
    constructor(artista,cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then(respuesta => respuesta.json()) //despues mandamos un console.log y la letra sale en el atributo lyrics
            .then(resultado => {

                if(resultado.lyrics){
                    const { lyrics } = resultado;

                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`

                }
                else{
                    UI.divMensajes.textContent = 'La canción no existe, prueba con otra';
                    UI.divMensajes.classList.add('error');
                    //nuevos comentarios
                    //dsfsdf
                }
                                
            })
    }
}

export default API;