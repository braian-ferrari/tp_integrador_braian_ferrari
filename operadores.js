function calcularPrecioTotal(cantidadTickets, categoria) {
    const precioPorTicket = 200;

    let descuento = 0;

    if (categoria === '1') {
        descuento = 0.8; 
    } else if (categoria === '2') {
        descuento = 0.5; 
    } else if (categoria === '3') {
        descuento = 0.15; 
    }

    const precioTotal = cantidadTickets * precioPorTicket * (1 - descuento);

    return precioTotal;
}

function calcular() {
    const cantidadTickets = document.querySelector('.inputCant').value;
    const categoria = document.querySelector('.select').value;

    const precioFinal = calcularPrecioTotal(cantidadTickets, categoria);
    document.querySelector('#resultado').textContent = `Total a Pagar: $${precioFinal}`;
}

