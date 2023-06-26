window.alert("Para este sitio debes ser mayor de edad. Si das 'click' al boton de aceptar estas indicando que lo eres. Caso contrario este no es un sitio para ti. Regresa cuando cumplas 18!")
// Hacerlo para que aparezca solo cuando quiere conffirmar la compra
function agrandar(element) {
    element.parentElement.style.transform = 'scale(1.02)';
}
  
function achicar(element) {
    element.parentElement.style.transform = 'scale(1)';
}

const productosContainer = document.getElementById('productos');
const vaciarCarritoBtn = document.createElement('button');
vaciarCarritoBtn.innerText = 'Vaciar Carrito';

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

productosContainer.appendChild(vaciarCarritoBtn);