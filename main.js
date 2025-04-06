
window.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('product-list');
  productos.forEach(producto => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <strong>${producto.precio}</strong>
      <br><a href="https://wa.me/541170809692?text=Hola!%20Quiero%20comprar%20${encodeURIComponent(producto.nombre)}" target="_blank">Comprar por WhatsApp</a>
    `;
    contenedor.appendChild(div);
  });
});
