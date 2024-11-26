const menus = [
    {nombre: "Inicio", url: "index.html"},
    {nombre: "¿Quienes somos?", url: "quienes.html"},
    {nombre: "Contacto", url: "contacto.html"},
    {nombre: "Carrito", url: "carrito.html"},
];

function cargarmenu() {
    let enlaces = document.getElementById("ulmenu")
    for (const menu of menus) {
        let lista = document.createElement("li")
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
        nombre: "Conos para cascada Aromanza",
        urlImagen: "conos.jpg",
        precio: 1200,
        descripcion: "Conos para cascada, vienen fragancias como: reina de la noche, frutos rojos, sandalo hindu, vainilla, berry kiss",
        stock: 12
    },
    {
        id: 5,
        nombre: "Cuencos defumacion",
        urlImagen: "cuencos.jpg",
        precio: 2500,
        descripcion: "Cuencos defumacion, de 10cm x 10cm, todos hechos de ceramica",
        stock: 7
    },
    {
        id: 6,
        nombre: "Cascada de humo",
        urlImagen: "cascada.jpg",
        precio: 5000,
        descripcion: "Cascada humo, figuras como, buda, ganesha, mano",
        stock: 30
    },
    {
        id: 7,
        nombre: "Cascada de agua",
        urlImagen: "cascada.jpg",
        precio: 8000,
        descripcion: "Cascada de agua, 10cm x 8cm",
        stock: 20
    },
    {
        id: 8,
        nombre: "Horno para escencias",
        urlImagen: "horno.jpg",
        precio: 3500,
        descripcion: "Horno a vela para escencias, 13cm (incluye 3 velas de regalo)",
        stock: 10
    },
    {
        id: 9,
        nombre: "Lampara de sal",
        urlImagen: "lampara.jpg",
        precio: 6000,
        descripcion: "Lampara de sal, figura de buda",
        stock: 18
    },
    {
        id: 10,
        nombre: "Escencias para horno",
        urlImagen: "aceite.jpg",
        precio: 1000,
        descripcion: "Escencias para hornito, fragancias como: frutilla, vainilla, chocolate, jazmin, 7 poderes",
        stock: 40
    }
];

function cargarproductos() {
    let enlaces = document.getElementById("boxproductos")
    for (const producto of productos) {
        let lista = document.createElement("div")
        lista.classList.add('producto-card');
        lista.innerHTML =`
            <h3>${producto.nombre}</h3>
            <img src="${producto.urlImagen}" alt="${producto.nombre}">
            <p class="precio">$${producto.precio}</p>
            <button onclick="verdetalle('${producto.id}')">Detalles</button>
        `;
        enlaces.appendChild(lista);
    }
}
cargarproductos()

function verdetalle(idproducto) {
    const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
    const enJSON = JSON.stringify(buscarProducto);
    localStorage.setItem("detalleproducto", enJSON)
    window.location.href = "detalle.html";
}
