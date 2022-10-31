alert("Le damos la Bienvenida a nuestro espacio de Salud y Bienestar")
let serv;
let turnos;
let costo;
let opcion;
let userAge = parseInt(prompt("Cuantos años tienes?"))
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
                        break;
                    case '2':
                        alert("Eligió el area de Fisioteria \nEl costo p/consulta es de $3.000 ")
                        serv = "Fisioterapia"
                        turnos = parseInt(prompt("Cuantas sesiones desea?"))
                        costo = 3000 * turnos
                        break;
                    case '3':
                        alert("Eligió el area de SPA \nEl costo p/consulta es de $2.500 ")
                        serv = "SPA"
                        turnos = parseInt(prompt("Cuantas sesiones desea?"))
                        costo = 2500 * turnos
                        break;
                    case '0':
                        alert("Has salido del carrito!!")

                        break; 
                    default:
                        alert("Usted ha ingresado un valor incorrecto, por favor seleccione una opción");
                        break;
                }
                function compra(serv, turnos) {
                    alert(`Usted contrató ${turnos} en el area de ${serv}, su total a pagar seria $${costo}`)
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


}








