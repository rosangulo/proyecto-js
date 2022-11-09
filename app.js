//codigo integrador
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

/* let userNickName; */
function Persona(userName, userAge/*,  userNickName */) {
    this.userName = userName,
        this.userAge = userAge
}
/* this.userNickName = userNickName */


for (let i = 6; i >= 0; i--) {
    userName = prompt("escriba su nombre aqui")
    console.log(`hola ${userName}`)
    userAge = parseInt(prompt("escriba su edad"));
    /* userNickName = prompt("cómo querria que se llame su cuenta?") */

    const persona1 = new Persona(userName, userAge /* userNickName */);
    console.log(persona1)




    if (userAge >= 18) {
        do {
            do {

                elegirArea();
                elegirProducto();
                agregarMasProductos();





                /* while (asq !== "n") {
                    alert("Muchas gracias por su visita!!")
                    break;
                } */



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








