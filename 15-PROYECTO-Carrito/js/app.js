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
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) 
    {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
        

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
    //Agregar elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];

    console.log(articulosCarrito);
    carritoHTML();

}

//Muestra el carrito de compras
function carritoHTML() {

    //Limpiar HTML
    limpiarHTML()

    //Recorre carrito y genera HTML
    articulosCarrito.forEach((curso) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        `;
        //Agrega el HML DEL CARRITO EN EL TBODY
        contenedorCarrito.appendChild(row);
    })
}

//eLIMINA LOS CURSOS PREVIOS DEL THBODY
function limpiarHTML() {
    contenedorCarrito.innerHTML = '';
}