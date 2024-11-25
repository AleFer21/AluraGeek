const formulario = document.querySelector(".agregar-producto__form");
const botonLimpiar = formulario.querySelector(".button__limpiar");

botonLimpiar.addEventListener('click', (evento) => {
    evento.preventDefault();
    formulario.reset();
});