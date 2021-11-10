//VARIABLES

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando agregar al carrito
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) 
    {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        
        leerDatosCurso(cursoSeleccionado);

        //es todo el div que tiene cl curso, el parent parent indica q es el abuelo del boton agregar-carrito
        

    }
    //console.log(e.target.classList);
}

//lEER CONTENIDO DEL HTML Y EXTRAE LA INFO DEL CURSO
function leerDatosCurso(curso) {
    console.log(curso);

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1

    }
    //Revisar si un objeto existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe) {
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            } else {
                return curso; //retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];
    }
    else {
        //Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
        console.log
    }



    console.log(articulosCarrito);
    carritoHTML();

}

//Muestra el carrito de compras
function carritoHTML() {

    //Limpiar HTML
    limpiarHTML()

    //Recorre carrito y genera HTML
    articulosCarrito.forEach((curso) => {
        const {imagen,titulo,precio,cantidad} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width = "100">
            </td>
            <td>
            ${titulo}
            </td>
            <td>
            ${precio}
            </td>
            <td>
            ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}"> X <a/>
            </td>

        `;
        //Agrega el HML DEL CARRITO EN EL TBODY
        contenedorCarrito.appendChild(row);
    })
}

//eLIMINA LOS CURSOS PREVIOS DEL THBODY
function limpiarHTML() {
    //contenedorCarrito.innerHTML = '';

    //mejor performance, un while
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

function eliminarCurso(e) {
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

       carritoHTML(); //iterar sobre el carrito y mostrar Html
    }

}

function vaciarCarrito() {
    articulosCarrito = [];
    limpiarHTML();
    
}