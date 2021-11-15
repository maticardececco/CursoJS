//Constructores

function Seguro(marca,año, tipo){
    this.marca = marca;
    this.año = año;
    this.tipo = tipo;
}

//realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function() {
    /* 
    Si es opcion 1: Americano 1.15
    2 = asiatico 1.05
    3 = europeo 1.35
    */
   let cantidad;
   const base = 2000;
   switch(this.marca){
    
   
    case '1':
        cantidad = base * 1.15;
        break;
    case '2':
        cantidad = base * 1.05;
        break;
    case '3':
        cantidad = base * 1.35;
        break;
    default:
        break;
     } 
     //Leer el año
     const diferencia = new Date().getFullYear() - this.year;

     cantidad -= ((diferencia * 3) * cantidad) / 100;


     /**
      Si el seguro es basico se multiplica por un 30 mas
      Si el seguro es completo se multiplica por un 50
      */

     //cada año que la diferncia es mayor, el costo va a reducirse
     if(this.tipo === 'basico'){
         cantidad *= 1.30
     }else
     {
         cantidad *= 1.50;
     }

     return cantidad;


     console.log(cantidad);

}

function UI() {

}

UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
    min = max -20;

    const selectYear = document.querySelector('#year');

    for(let i = max; i > min ; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}


//MOSTRAR ALERTAS EN PANTALLA
UI.prototype.mostrarMensaje = function (mensaje,tipo) {

    const div = document.createElement('div');
    if (tipo === 'error') {
        div.classList.add('error');
    }else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;


    //insertar html
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div,document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);

}

//instanciar UI, global para llamarlo dentro de los metodos...
const ui = new UI();
//console.log(ui);

//Cuando se carga el documento,se llena el combo
document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
})


eventListeners()
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit',cotizarSeguro);

}

function cotizarSeguro(e) {
    e.preventDefault();
    //Leer la marca
    const marca = document.querySelector('#marca').value;
   // console.log(marca);


    //Leer el año
    const year = document.querySelector('#year').value;
    //console.log(year);

    //Leer el tipo de cobertura radioButtons
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    //console.log(tipo);

    if(marca === '' || year === '' || tipo === '' ){
        
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }else{
        ui.mostrarMensaje('Cotizando', 'exito');
    }

    //instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    console.log(total);



}

