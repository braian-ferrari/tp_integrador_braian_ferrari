function getValorById(id){
     return document.getElementById(id).value;
    
}

function calcular(){
    let valor1 = Number(getValorById('valor1'));
    let valor2 =Number(getValorById('valor2'));
    let valor3 = Number(getValorById('valor3'));

    if (categoria === 'estudiante') {
        descuento = 0.8; // 80% de descuento
      } else if (categoria === 'trainee') {
        descuento = 0.5; // 50% de descuento
      } else if (categoria === 'junior') {
        descuento = 0.15; // 15% de descuento
      }
}


function calcularPrecioTotal(cantidadTickets, categoria) {
  const precioPorTicket = 200;

  let descuento = 0;

  if (categoria === '1') {
    descuento = 0.8; // 80% de descuento para Estudiante
  } else if (categoria === '2') {
    descuento = 0.5; // 50% de descuento para Trainee
  } else if (categoria === '3') {
    descuento = 0.15; // 15% de descuento para Junior
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

