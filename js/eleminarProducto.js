import { conexionAPI } from "./conexionAPI.js";

document.addEventListener('click', async (evento) => {
    if (evento.target.closest('.btn-eliminar')) {
        const producto = evento.target.closest("[data-id]");
        if(!producto) {
            console.error('No se encontró el producto');
            return;
        }
        const id = producto.getAttribute('data-id');
        console.log("Producto con id: " + id);
        if(id) {
            await conexionAPI.eliminarProducto(id);
            //elimina el producto del DOM
            producto.remove();
        } else {
            console.error('No se encontró el id del producto');
        }
    }
});