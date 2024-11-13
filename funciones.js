const menus = [
    {nombre: "Inicio", url: "index.html"},
    {nombre: "¿Quiénes somos?", url: "quienes.html"},
    {nombre: "Contacto", url: "contacto.html"},
    {nombre: "Carrito", url: "carrito.html"},
];

function cargarmenu() {
    let enlaces = document.getElementById("ulmenu");
    for (const menu of menus) {
        let lista = document.createElement("li");
        lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`;
        enlaces.appendChild(lista);
    }
}
cargarmenu()

const productos = [
    {
        id: 1,
        nombre: "Sahumerios tibetanos Aromanza",
        urlImagen: "aromanza.jpg",
        precio: 2000,
        descripcion: "Sahumerios tibetanos aromanza, vienen fragancias como: reina de la noche, frutos rojos, sandalo hindu, vainilla, berry kiss",
        stock: 15
    },
    {
        id: 2,
        nombre: "Sahumerios sagrada madre",
        urlImagen: "sagrada.jpg",
        precio: 1700,
        descripcion: "Sahumerios 100% hechos con plantas naturales, fragancias como vainilla, palo santo, rosas, cannabis",
        stock: 8
    },
    {
        id: 3,
        nombre: "Bomba defumacion, sagrada madre",
        urlImagen: "bomba.jpg",
        precio: 1100,
        descripcion: "Bombas de defumacion, abre caminos, 7 poderes, atrracion divina, abundancia, destrabe",
        stock: 25
    },
    {
        id: 4,
        nombre: "Lampara sal",
        urlImagen: "lampara.jpg",
        precio: 1100,
        descripcion: "Lampara de sal, cuenco, incluye el foco.",
        stock: 25
    },
    {
        id:5,
        nombre: "Ganesha",
        urlImagen: "ganesh.jpg",
        precio: 1100,
        descripcion: "Figura Ganesha 30cm color cobre",
        stock: 25
    },
    {
        id: 6,
        nombre: "Combo budas",
        urlImagen: "buda.jpg",
        precio: 1100,
        descripcion: "Budas x2 , 15cm c/u",
        stock: 25
    },
    {
        id: 7,
        nombre: "Fuente de agua",
        urlImagen: "fuente.jpg",
        precio: 1100,
        descripcion: "Fuente de agua de 10cm, con luces",
        stock: 25
    },
    {
        id: 8,
        nombre: "Buda",
        urlImagen: "buda2.jpg",
        precio: 1100,
        descripcion: "Buda 10cm",
        stock: 25
    },
    {
        id: 9,
        nombre: "Cuenco defumacion",
        urlImagen: "cuencos.jpg",
        precio: 1100,
        descripcion: "Cuenco de defumacion",
        stock: 25
    },
    {
        id: 10,
        nombre: "Horno para escencias",
        urlImagen: "horno.jpg",
        precio: 1100,
        descripcion: "Horno a vela para escencias , 15cm ",
        stock: 25
    },

    
];

function cargarproductos() {
    let enlaces = document.getElementById("boxproductos");
    for (const producto of productos) {
        let lista = document.createElement("div");
        lista.classList.add('producto-card');
        lista.innerHTML = `
            <h3>${producto.nombre}</h3>
            <img src="${producto.urlImagen}" alt="${producto.nombre}">
            <p class="precio">$${producto.precio}</p>
            <button onclick="verdetalle(${producto.id})">Detalles</button>
        `;
        enlaces.appendChild(lista);
    }
}
cargarproductos();

function verdetalle(idproducto) {
    // Se guarda el producto que se desea ver en localStorage
    const buscarProducto = productos.find(producto => producto.id === idproducto);
    if (buscarProducto) {
        const enJSON = JSON.stringify(buscarProducto);
        localStorage.setItem("detalleproducto", enJSON);
        window.location.href = "detalle.html";
    } else {
        console.error("Producto no encontrado");
    }
}
