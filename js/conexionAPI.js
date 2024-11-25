async function listarProductos() {
    try{
        const conexion = await fetch("http://localhost:3001/productos");
        if(!conexion.ok) {
            throw new Error("Error en la respuesta del servidor");
        }
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error("Error", error);
    }
}

async function agregarProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    });
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarProducto(id) {
    try {
        const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
            method: "DELETE",
            headers: {"Content-type": "application/json"},
        });
        if(conexion.ok) {
            console.log("Producto eliminado con éxito");
        } else {
            console.log("Error al eliminar el producto");
        }
    } catch (error) {
        console.error("Error", error);
    }
}

export const conexionAPI = {
    listarProductos, agregarProducto, eliminarProducto
}