// Pequeña animación al cargar
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('header').style.opacity = 0;
    setTimeout(() => {
      document.querySelector('header').style.transition = 'opacity 1s ease-in';
      document.querySelector('header').style.opacity = 1;
    }, 100);
  });
  