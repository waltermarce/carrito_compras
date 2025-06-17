let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(nombre, precio, idCantidad) {
  const cantidad = parseInt(document.getElementById(idCantidad).value);
  const item = { nombre, precio, cantidad };
  carrito.push(item);
  guardarEnLocalStorage();
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total");
  lista.innerHTML = "";
  let suma = 0;

  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.cantidad} x ${item.nombre} - $${item.precio * item.cantidad}`;
    lista.appendChild(li);
    suma += item.precio * item.cantidad;
  });

  total.textContent = suma;
}

function vaciarCarrito() {
  carrito = [];
  guardarEnLocalStorage();
  actualizarCarrito();
}

function confirmarCompra() {
  let total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  alert(`Gracias por tu compra. Total a pagar: $${total}`);
  vaciarCarrito();
}

function guardarEnLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Al cargar la página, actualizamos el carrito si hay datos
window.onload = actualizarCarrito;
