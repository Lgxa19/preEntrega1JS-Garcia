/* Funcion para mostrar lista de productos */
function mostrarListaProductos() {
    let listaProductos = "Lista de productos:\n";
    listaProductos += "1. Camisa - $10.00\n";
    listaProductos += "2. Short - $20.00\n";
    listaProductos += "3. Bolso - $15.00\n";
    listaProductos += "4. Pelota - $25.00\n";
    listaProductos += "5. Gorra - $12.00\n";
    listaProductos += "6. Pala - $18.00\n";
    listaProductos += "7. Sueter - $30.00\n";
    alert(listaProductos);
}

// Funcion para unir un precio con un producto específico
function agregarProducto(indiceProductos) {
    let precio;

    switch (indiceProductos) {
        case 1:
            precio = 10;
            break;
        case 2:
            precio = 20;
            break;
        case 3:
            precio = 15;
            break;
        case 4:
            precio = 25;
            break;
        case 5:
            precio = 12;
            break;
        case 6:
            precio = 18;
            break;
        case 7:
            precio = 30;
            break;
        default:
            alert("Numero de producto inválido. Por favor ingresar un número entre 1 y 7.");
            return;
    }

    precioTotal += precio;
    alert(`Producto ${indiceProductos} agregado. Precio total: $${precioTotal.toFixed(2)}`);
}

// Loop principal
let precioTotal = 0;
let productosAgregados = 0;

while (agregarProductoPrompt = true) {

    /* Prompt para saber si se quiere agregar un producto */
    let agregarProductoPrompt = prompt(("¿Quieres agregar un producto?\nSi o no"));

    /* if que depende del prompt
    if cuando el usuario responde que si quiere agregar un producto */
    if (agregarProductoPrompt.toLowerCase() == "si") {
        mostrarListaProductos();

        let indiceProductos = prompt("Ingresa el numero de producto que quieres agregar (1-7):");
        indiceProductos = parseInt(indiceProductos);

        agregarProducto(indiceProductos);

        productosAgregados++;
    } /* if cuando no se quiere agregar un producto */else if(agregarProductoPrompt.toLowerCase() == "no") {
        break; // Sale del loop si el usuario no quiere agregar mas productos
    } /* if cuando el usuario no coloca una respuesta válida */else if(agregarProductoPrompt.toLowerCase !== "si" || agregarProductoPrompt.toLowerCase !== "no") {
        alert("Por favor indique si quiere agregar un producto o no");
    }
}

/* if para dar el resultado total */
if (productosAgregados > 0) {
    alert(`Precio total: $${precioTotal.toFixed(2)}\nGracias por su compra`);
} else {
    alert("No hubo productos agregados. Precio total es: $0.00.");
}