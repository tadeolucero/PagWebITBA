window.alert("Para este sitio debes ser mayor de edad. Si das 'click' al boton de aceptar estas indicando que lo eres. Caso contrario este no es un sitio para ti. Regresa cuando cumplas 18!")
// Hacerlo para que aparezca solo cuando quiere conffirmar la compra
function agrandar(element) {
    element.parentElement.style.transform = 'scale(1.02)';
}
  
function achicar(element) {
    element.parentElement.style.transform = 'scale(1)';
}
let totalStr = document.getElementsByClassName('total')[0].innerHTML
let precioFinal=parseInt(totalStr)

