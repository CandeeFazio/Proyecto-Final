const menus = [
    { nombre: "Inicio", url: "index.html" },
    { nombre: "¿Quienes somos?", url: "quienes.html" },
    { nombre: "Contacto", url: "contacto.html" },
    { nombre: "Carrito", url: "carrito.html" }
];

function cargarmenu() {
    let enlaces = document.getElementById("ulmenu");
    for (const menu of menus) {
        let lista = document.createElement("li");
        lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`;
        enlaces.appendChild(lista);
    }
}

cargarmenu();

let productocarritos = JSON.parse(localStorage.getItem("carrito")) || [];

function cargarcarrito() {
    let enlaces = document.getElementById("tablacarrito");
    // Asegúrate de que `productocarritos` no sea null o undefined
    if (productocarritos && productocarritos.length > 0) {
        for (const productocarrito of productocarritos) {
            let lista = document.createElement("tr");
            lista.id = `producto-${productocarrito.id}`;  // Asegúrate de usar un id único
            lista.innerHTML = `
                <td><img src="${productocarrito.urlImagen}" width="50"></td>
                <td>${productocarrito.cantidad}</td>
                <td>${productocarrito.nombre}</td>
                <td>${productocarrito.precio}</td>
                <td>${productocarrito.cantidad * productocarrito.precio}</td>
                <td><button id="btneliminar" onclick="eliminarproducto(${productocarrito.id})">x</button></td>
            `;
            enlaces.appendChild(lista);
        }
    } else {
        let mensaje = document.createElement("tr");
        mensaje.innerHTML = "<td colspan='6'>No hay productos en el carrito</td>";
        enlaces.appendChild(mensaje);
    }
}

cargarcarrito();

function eliminarproducto(id) {
    // Eliminar producto de la interfaz
    let nodo = document.getElementById(`producto-${id}`);
    if (nodo) {
        nodo.remove();
    }

    // Filtrar el producto del carrito
    productocarritos = productocarritos.filter(producto => producto.id !== id);

    // Guardar el carrito actualizado en el localStorage
    const enJSON = JSON.stringify(productocarritos);
    localStorage.setItem("carrito", enJSON);
}
