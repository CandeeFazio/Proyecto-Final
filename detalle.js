const menus = [
    { nombre: "Inicio", url: "index.html" },
    { nombre: "¿Quienes somos?", url: "quienes.html" },
    { nombre: "Contacto", url: "contacto.html" },
    { nombre: "Carrito", url: "carrito.html" },
];

function cargarmenu() {
    let enlaces = document.getElementById("ulmenu");
    if (enlaces) {
        for (const menu of menus) {
            let lista = document.createElement("li");
            lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`;
            enlaces.appendChild(lista);
        }
    } else {
        console.error("No se encontró el elemento 'ulmenu'");
    }
}

cargarmenu();

let productodetalle = JSON.parse(localStorage.getItem("detalleproducto"));

function cargarproducto() {
    if (productodetalle) {
        let enlaces = document.getElementById("boxproductos");
        let lista = document.createElement("div");

        // Generación del HTML para el producto
        lista.innerHTML = `
            <h3>${productodetalle.nombre}</h3>
            <img src="${productodetalle.urlImagen}" alt="Imagen del producto">
            <p class="precio">${productodetalle.precio}</p> 
            <div class="boxdetalle">
                <div class="boxdescripcion">
                    <p class="descripcion">${productodetalle.descripcion}</p>
                    <div class="boxcontador">
                        <button onclick="sumar()">+</button>
                        <p id="contarproducto">0</p>
                        <button onclick="restar()">-</button>
                    </div>
                    <button onclick="cargarcarrito()">Cargar carrito</button>
                </div>
            </div>
        `;
        enlaces.appendChild(lista);
    } else {
        console.error("No se encontró ningún producto en el localStorage");
    }
}

cargarproducto();

let contador = 0;

function sumar() {
    let nstock = productodetalle.stock;
    if (contador < nstock) {
        contador++;
        document.getElementById("contarproducto").innerHTML = contador;
    } else {
        alert("Stock agotado!");
    }
}

function restar() {
    if (contador > 0) {
        contador--;
        document.getElementById("contarproducto").innerHTML = contador;
    }
}

function cargarcarrito() {
    if (contador == 0) {
        alert("Ingrese la cantidad de productos deseados, por favor.");
    } else {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        productodetalle.cantidad = contador; // Agrega la cantidad al producto
        carrito.push(productodetalle);
        const enJSON = JSON.stringify(carrito);
        localStorage.setItem("carrito", enJSON);
        window.location.href = "carrito.html";
    }
}
