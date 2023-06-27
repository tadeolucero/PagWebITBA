function agrandar(element) {
    element.parentElement.style.transform = 'scale(1.02)';
}
  
function achicar(element) {
    element.parentElement.style.transform = 'scale(1)';
}

const productosContainer = document.getElementById('productos');
const vaciarCarritoBtn = document.getElementById('vaciarCarritoBtn');

const carrito = [];

function agregarAlCarrito(precio) {
  carrito.push(precio);
  actualizarTotal();
}

function vaciarCarrito() {
  carrito.length = 0;
  actualizarTotal();
}

function actualizarTotal() {
  const totalElement = document.querySelector('.total');
  totalElement.innerText = carrito.reduce((total, precio) => total + precio, 0);
}

const addToCartBtns = document.querySelectorAll('.addToCartBtn');
addToCartBtns.forEach(btn => {
  const price = parseInt(btn.dataset.price);
  btn.addEventListener('click', () => {
    agregarAlCarrito(price);
  });
});

vaciarCarritoBtn.addEventListener('click', () => {
  vaciarCarrito();
});

const carritoContainer = document.getElementById('carrito');
carritoContainer.appendChild(vaciarCarritoBtn);

const finalizar=document.getElementById('pedidoCompletoBtn')
finalizar.addEventListener('click', function() {
  if((carrito!=0)){
    if(window.confirm('Al hacer click en "aceptar" estas confirmando que eres mayor de edad y que quieres confirmar la compra')){
      window.location.href= 'cuestionario.html';
    }
    }
    else{
      window.alert('El carrito esta vacio')
    }
});
