import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(nombre, precio, imagen, id) {
    const producto = document.createElement("li");
    producto.className = "productos__lista--item";
    producto.setAttribute("data-id", id);
    producto.innerHTML =    `<figure class="productos__lista--figure">
                                <img class="productos__lista--img" src="${imagen}" alt="Imagen del producto">
                                <figcaption class="productos__lista--texto">${nombre}</figcaption>
                            </figure>
                            <div class="productos__info">
                                <p>$ ${precio}</p>
                                <button class="btn-eliminar">
                                    <i class='bx bx-trash'></i>
                                </button>
                            </div>`;

    return producto;
}

async function listarProductos() {
    const lista = document.querySelector(".productos__lista")
    const productos = await conexionAPI.listarProductos();
    if(productos && productos.length > 0) {
        productos.forEach(({nombre, precio, imagen, id}) => {
            const card = crearCard(nombre, precio, imagen, id);
            lista.appendChild(card);
        });
    } else {
        lista.innerHTML = `<p>No hay productos disponibles</p>`
    }
}

listarProductos();