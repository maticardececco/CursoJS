//Bloque try catch

//console.log(1+1);
//muestra 2 y no muestra 4, porque la funcion hola no esta definida y se detiene la ejecución

// try{
//     autenticarUsuario();
// }catch(error){
//     console.log(error);
// }

console.log(2+2);

let nombre = prompt("Ingrese nombre de usuario: ");

if (nombre == ""){
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ignresado: " + nombre)
}