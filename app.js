
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
const servicio1 = new Servicio(1, "nutricion", "dieta balanceada", "./Images/Decoracion/plato-equilibrado.jpg", 2500);
const servicio2 = new Servicio(2, "nutricion", "dieta adelgazante", "./Images/Decoracion/Detox-salad.jpg", 3000);
const servicio3 = new Servicio(3, "nutricion", "control dietario", "./Images/Decoracion/nutricion-clinica-muelle-heredia-malaga.jpg", 2000);
const servicio4 = new Servicio(4, "fisioterapia", "masoterapia", "./Images/Decoracion/tratamientos-de-masoterapia.jpg", 3000);
const servicio5 = new Servicio(5, "fisioterapia", "drenaje linfático", "./Images/Decoracion/drenajeLinfatico.jpg", 3000);
const servicio6 = new Servicio(6, "fisioterapia", "rehabilitacion", "./Images/Decoracion/rehabilitacion.jpeg", 2500);
const servicio7 = new Servicio(7, "spa", "fangoterapia", "./Images/Decoracion/ES_fango.jpg", 3500);
const servicio8 = new Servicio(8, "spa", "masajes con priedras calientes", "./Images/Decoracion/Descontracturacion-con-piedras.jpg", 3000);
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
        contenedor.classList.add("card", "col-sm-4");
        //          CUERPO DE CARDS
        const cuerpoCard = document.createElement("div");
        cuerpoCard.classList.add("card-body");
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
        imgCard.classList.add("img-fluid");
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




/********************************************************************** */
/**********************CODIGO DE LA SEGUNDA ENTREGA******************** */
/********************************************************************** */



/* //codigo integrador
let asq;

const areas = ["Nutricion", "Fisioterapia", "SPA"]

const productos = [
    {
        nombreProducto: "dieta balanceada",
        servicio: "nutricion",
        precio: 2500,
        stock: 15

    },
    {
        nombreProducto: "dieta adelgazante",
        servicio: "nutricion",
        precio: 3000,
        stock: 2
    },
    {
        nombreProducto: "control dietario",
        servicio: "nutricion",
        precio: 2000,
        stock: 3
    },
    {
        nombreProducto: "masoterapia",
        servicio: "fisioterapia",
        precio: 3000,
        stock: 5
    },
    {
        nombreProducto: "drenaje linfático",
        servicio: "fisioterapia",
        precio: 3000,
        stock: 4
    },
    {
        nombreProducto: "rehabilitaciones",
        servicio: "fisioterapia",
        precio: 2500,
        stock: 3
    },
    {
        nombreProducto: "fangoterapia",
        servicio: "spa",
        precio: 3000,
        stock: 5
    },
    {
        nombreProducto: "masajes con priedras calientes",
        servicio: "spa",
        precio: 2000,
        stock: 4
    }

];

class ProductoCarrito {
    constructor(nombreProducto, servicio, precio, stock) {
        this.nombreProducto = nombreProducto;
        this.servicio = servicio;
        this.precio = precio;


    }
}



let carrito = [];
alert("Te damos la bienvenida a Espacio de Bienestar y Salud")
let userName;
let userAge;
let areaElegida;
let productoAreaElegida = [];
let finalizaCompra = 0;


function Persona(userName, userAge {
    this.userName = userName,
        this.userAge = userAge
}



for (let i = 6; i >= 0; i--) {
    userName = prompt("escriba su nombre aqui")
    console.log(`hola ${userName}`)
    userAge = parseInt(prompt("escriba su edad"));
     userNickName = prompt("cómo querria que se llame su cuenta?") 

    const persona1 = new Persona(userName, userAge , userNickName );
    console.log(persona1)




    if (userAge >= 18) {
        do {
            do {

                elegirArea();
                elegirProducto();
                agregarMasProductos();





                 while (asq !== "n") {
                    alert("Muchas gracias por su visita!!")
                    break;
                } 



            } while (finalizaCompra == 0)
            finalizaCompra = 0;
            compra();

            agregarMasProductos();

        } while (finalizaCompra == 0);
        let total = 0;
        for (let i = 0; carrito.length > i; i++) {
            total = carrito[i].precio + total;
        }
        alert(`El total de su compra es $${total}`);
        console.log("Pago total es: $"+total)
        alert("Su compra se ha efectuado con exito!")
        break;
    } else {
        userAge = parseInt(prompt("Edad invalida, tiene que ser mayor a 18 años. \n Ingrese la edad de alguna mayor responsable: "));
    }
}
*/



/********************************************************************** */
/**********************CODIGO DE LA PRIMERA ENTREGA******************** */
/********************************************************************** */



/* alert("Le damos la Bienvenida a nuestro espacio de Salud y Bienestar")
let serv;
let turnos;
let costo;
let opcion;
const userAge = parseInt(prompt("Cuantos años tienes?"))
let contrato;
for (let i = 2; i > 0; i--) {
    if (userAge >= 18) {
        let asq = prompt("Desea adquirir alguno de nuestros servicios?\n(Responda con una 'S' o con una 'N')")
        if (asq == "s" || asq == "S") {
            do {
                opcion = prompt("Desea una consulta en el area de: \n1-Nutricion \n2-Fisioterapia \n3-Spa \n 0- si no es ninguna de las opciones").toLowerCase();
                switch (opcion) {
                    case '1':
                        alert("Eligió el area de Nutrición \nEl costo p/consulta es de $3.000 ")
                        serv = "Nutricion"
                        turnos = parseInt(prompt("Cuantas sesiones desea?"))
                        costo = 3000 * turnos
                        contrato=true;
                        break;
                    case '2':
                        alert("Eligió el area de Fisioteria \nEl costo p/consulta es de $3.000 ")
                        serv = "Fisioterapia"
                        turnos = parseInt(prompt("Cuantas sesiones desea?"))
                        costo = 3000 * turnos
                        contrato=true;
                        break;
                    case '3':
                        alert("Eligió el area de SPA \nEl costo p/consulta es de $2.500 ")
                        serv = "SPA"
                        turnos = parseInt(prompt("Cuantas sesiones desea?"))
                        costo = 2500 * turnos
                        contrato=true;
                        break;
                    case '0':
                        alert("Has salido del carrito!!")
                        contrato=false;
                        break; 
                    default:
                        alert("Usted ha ingresado un valor incorrecto, por favor seleccione una opción");
                        break;
                }
                function compra(serv, turnos) {
                    if(contrato===true){
                    alert(`Usted contrató ${turnos} en el area de ${serv}, su total a pagar seria $${costo}`)
                    }
                    return
                }
                compra(serv, turnos);
                console.log(`${turnos} de ${serv} total a cobrar $${costo}`)

                break;
            } while (opcion != "0") {
                alert("Muchas gracias por su visita")
                break;
            }
        } else if (asq == "n" || asq == "N") {
            alert("Muchas gracias por su visita")
            break;
        } else {
            alert("Opción incorrecta")
        }
    } else if (userAge < 18) {
        userAge = parseInt(prompt("Lo sentimos, no podemos tomarle su pedido \nPidale a algun adulto que haga su pedido"))
    } else {
        alert("lLo sentimos, opcion incorrecta")
    }


} */








