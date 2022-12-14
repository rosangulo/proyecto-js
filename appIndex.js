const domItems = document.querySelector("#items");

function renderizarJson() {
    fetch ("./data.json")
    .then((res)=>res.json())
    .then((servicios)=>
    {
        servicios.forEach((info) => {

            //          ESTRUCTURA DE LAS CARDS
            const contenedor = document.createElement("div");
            contenedor.classList.add("tarjeta-index");
            //          CUERPO DE CARDS
            const cuerpoCard = document.createElement("div");
            cuerpoCard.classList.add("contenedorImagen-Index");
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
      
          
    
            //MATERIALIZAMOS EN HTML
    
            cuerpoCard.appendChild(imgCard);
            cuerpoCard.appendChild(cuerpoCardsTitulo);
            cuerpoCard.appendChild(cardArea);
            
            
            contenedor.appendChild(cuerpoCard);
            domItems.appendChild(contenedor);
    
    
        });
    })
    };

renderizarJson();