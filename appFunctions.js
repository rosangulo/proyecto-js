/********************************************************************** */
/***************************FUNCION DE ELEGIR AREA***************** */
/********************************************************************** */
function elegirArea() {
    let areaOk = 0;
    let existe;
    do {

        let areaElegida = prompt("Elija el area del servicio  que desee contratar: \n" + areas[0].toUpperCase() + "\n" + areas[1].toUpperCase() + "\n" + areas[2].toUpperCase());

        existe = productos.some((producto) => {
            return producto.servicio === areaElegida.toLowerCase()
        })
        if (existe===true) {
            productoAreaElegida = productos.filter((producto) => {
                return producto.servicio === areaElegida.toLowerCase();
            })
            areaOk = 1;
        } else {
            alert("Ha ingresado un area incorrecta, \nintente nuevamente.");
        }


    } while (areaOk == 0)
}

/********************************************************************** */
/***************************FUNCION DE ELEGIR PRODUCTO***************** */
/********************************************************************** */

function elegirProducto() {
    let productoOk = 0;
    let informacionProductoElegido;
    let precioProductoElegido;
    
    do {
        const listaProductosAreaElegida = productoAreaElegida.map((producto) => producto.nombreProducto)
        let productoElegido = prompt("Elija un producto: \n" + listaProductosAreaElegida.join("\n").toUpperCase()).toLowerCase()
        let productoExistente = productos.some(
            (producto) => producto.nombreProducto.toLowerCase() == productoElegido);
        let productoIncluidoArea = productoAreaElegida.map((producto) => producto.nombreProducto.toLowerCase())
            .includes(productoElegido);


        if (productoExistente == true && productoIncluidoArea == true) {
            informacionProductoElegido = productos.filter(
                (producto) => producto.nombreProducto.toLowerCase() === productoElegido
            );
            precioProductoElegido = Number(informacionProductoElegido.map((producto) => producto.precio));
            productoOk = 1;
            const productoCargado = new ProductoCarrito(
                productoElegido,
                areaElegida,
                precioProductoElegido
            );
            carrito.push(productoCargado);

        } else {
            alert("Ha ingresado un producto incorrecto, \nintente nuevamente.");
            let volverArea = 0;
            while (volverArea == 0) {
                let volverAreas = prompt("Desea volver a selección de areas? s/n"
                ).toLowerCase();
                if (volverAreas == "s" || volverAreas == "si") {
                    elegirArea();
                    volverArea = 1;
                }else if(volverAreas == "n" || volverAreas == "no"){
                    volverArea = 1;
                }else{
                    volverAreas=prompt("Respuesta incorrecta!!!\nDesea volver a selección de areas? s/n"
                    ).toLowerCase();
                }
            }
        }

    } while (productoOk == 0);
}


/********************************************************************** */
/**********************FUNCION DE ELEGIR OTRO PRODUCTO***************** */
/********************************************************************** */
function agregarMasProductos(){
    let masProductos=prompt("Desea agregar otro servicio a su carrito? \n 's'/'n'").toLowerCase();
    let seguirComprando=0;
    while(seguirComprando==0){
        if(masProductos=="s"){
            
            seguirComprando=1;
            finalizaCompra=0;
        }else if(masProductos=="n"){
            
            finalizaCompra=1;
            break;
            
        }else{
            masProductos=prompt("Respuesta incorrecta!!!\nDesea agregar servicios a su carrito? \n 's'/'n'").toLowerCase();
        }
    }

}



/********************************************************************** */
/****************************FUNCION DE COMPRA************************* */
/********************************************************************** */
function compra(){
    for(let i=0;i<carrito.length;i++){
        alert(carrito[i].nombreProducto + " $" + carrito[i].precio)
    }
}