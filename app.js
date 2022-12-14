
/**************CONSTRUCTOR DE SERVICIOS************ */

class Servicio {
    constructor(id, area, nombreProducto, img, precio) {
            this.id = id,
            this.area = area,
            this.nombreProducto = nombreProducto,
            this.imgsrc = img,
            this.precio = precio
    }
}


/**************servicios************ */
const servicio1 = new Servicio(1, "Nutricion", "Dieta balanceada", "./Images/Decoracion/plato-equilibrado.jpg", 2500);
const servicio2 = new Servicio(2, "Nutricion", "Dieta adelgazante", "./Images/Decoracion/gazpacho-andaluz-casero.jpg", 3000);
const servicio3 = new Servicio(3, "Nutricion", "Control dietario", "./Images/Decoracion/nutricion-clinica-muelle-heredia-malaga.jpg", 2000);
const servicio4 = new Servicio(4, "Fisioterapia", "Masoterapia", "./Images/Decoracion/tratamientos-de-masoterapia.jpg", 3000);
const servicio5 = new Servicio(5, "Fisioterapia", "Drenaje linfático", "./Images/Decoracion/drenajeLinfatico.jpg", 3000);
const servicio6 = new Servicio(6, "Fisioterapia", "Rehabilitacion", "./Images/Decoracion/rehabilitacion.jpeg", 2500);
const servicio7 = new Servicio(7, "SPA", "Fangoterapia", "./Images/Decoracion/ES_fango.jpg", 3500);
const servicio8 = new Servicio(8, "SPA", "Masajes con priedras calientes", "./Images/Decoracion/Descontracturacion-con-piedras.jpg", 3000);
let servicios = [servicio1, servicio2, servicio3, servicio4, servicio5, servicio6, servicio7, servicio8];


/**************CARRITO************ */


let carrito = [];
const divisa = "$";
const domItems = document.querySelector("#items");
const domCarrito = document.querySelector("#carrito");
const domTotal = document.querySelector("#total");
const domBotonVaciar = document.querySelector("#boton-vaciar");
const miLocalStorage = window.localStorage;


/****************RECREAR OBJETOS************ */

function renderizar() {
    servicios.forEach((info) => {

        //          ESTRUCTURA DE LAS CARDS
        const contenedor = document.createElement("div");
        contenedor.classList.add("tarjeta");
        //          CUERPO DE CARDS
        const cuerpoCard = document.createElement("div");
        cuerpoCard.classList.add("contenedorImagen");
        //          TITULO
        const cuerpoCardsTitulo = document.createElement("h5");
        cuerpoCardsTitulo.classList.add("card-title");
        cuerpoCardsTitulo.textContent = info.nombreProducto;

        //          AREA
        const cardArea = document.createElement("h6")
        cardArea.classList.add("card-subtitle", "text-muted", "mb-2")
        cardArea.textContent = info.area;

        //          IMAGEN  
        const imgCard = document.createElement("img");
        imgCard.classList.add("imagenTarjeta");
        imgCard.setAttribute("src", info.imgsrc);
        //          PRECIO
        const precioCard = document.createElement("p");
        precioCard.classList.add("card-text");
        precioCard.textContent = `${divisa}${info.precio}`
        //          BOTON SUMAR
        const plusBtn = document.createElement("button");
        plusBtn.classList.add("btn", "btn-primary");
        plusBtn.textContent = "+";
        plusBtn.setAttribute("marcador", info.id);
        plusBtn.addEventListener("click", addProductoCarrito);


        //MATERIALIZAMOS EN HTML

        cuerpoCard.appendChild(imgCard);
        cuerpoCard.appendChild(cuerpoCardsTitulo);
        cuerpoCard.appendChild(cardArea);
        cuerpoCard.appendChild(precioCard);
        cuerpoCard.appendChild(plusBtn);
        contenedor.appendChild(cuerpoCard);
        domItems.appendChild(contenedor);


    });
}
/****************AGREGAR PRODUCTOS*********** */





function addProductoCarrito(evento) {
    carrito.push(evento.target.getAttribute("marcador"));
    renderizarCarrito();
    guardarCarritoLocalStorage();
}



/*************RENDERIZAR CARRITO****************** */

function renderizarCarrito() {
    domCarrito.textContent = "";

    const carritoSinDuplicados = [...new Set(carrito)];

    carritoSinDuplicados.forEach((item) => {
        const myItem = servicios.filter((itemBaseDeDatos) => {
            return itemBaseDeDatos.id === parseInt(item);
        });


        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);


        const contenedor = document.createElement("li");


        contenedor.classList.add("list-group-item", "text-right", "mx-2");
        contenedor.textContent = `${numeroUnidadesItem} x ${myItem[0].nombreProducto} - ${divisa}${myItem[0].precio}`;

        const botonBorrar = document.createElement("button");
        botonBorrar.classList.add("btn", "btn-danger", "mx-5");
        botonBorrar.textContent = "X";
        botonBorrar.style.marginLeft = "1rem";
        botonBorrar.dataset.item = item;
        botonBorrar.addEventListener("click", borrarItemCarrito);


        contenedor.appendChild(botonBorrar);
        domCarrito.appendChild(contenedor);


    });
    domTotal.textContent = calcularTotal();

}


/**********BORRAR ITEM CARRITO******** */
function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    })
    renderizarCarrito();
    guardarCarritoLocalStorage();
}


/**************** CALCULAR TOTAL********** */
function calcularTotal() {
    return carrito.reduce((total, item) => {
        const myItem = servicios.filter((itemBaseDeDatos) => {
            return itemBaseDeDatos.id === parseInt(item);
        });
        return total + myItem[0].precio;
    }, 0).toFixed(2);
}

/******************VACIAR CARRITO************ */
function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
    localStorage.clear();
}



/************CARRITO EN LOCALSTORAGE*********** */

function guardarCarritoLocalStorage() {
    miLocalStorage.setItem("carrito", JSON.stringify(carrito));
}


function cargarCarritoLocalStorage() {
    if (miLocalStorage.getItem("carrito") !== null) {
        carrito = JSON.parse(miLocalStorage.getItem("carrito"));
    }
}




domBotonVaciar.addEventListener("click", vaciarCarrito);


cargarCarritoLocalStorage();
renderizar();
renderizarCarrito();

