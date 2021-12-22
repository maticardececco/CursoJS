//API Notification para llamar a una notificación y mostrar en el momento en tiempo rea

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click',() => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log("El resultado es: " , resultado);
                    
        })
});


const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted'){
        const notificacion = new Notification('Esta es la notificación',{
            icon: 'img/ccj.png',
            boby: 'Codigo con Juan'
            
        });
    }
});


