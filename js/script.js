const botonMenu = document.querySelector('.boton-menu');
const navMenu = document.querySelector('.nav-menu');

botonMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const boton = document.getElementById("boton-menu");
boton.addEventListener("click", () => {
  boton.classList.toggle("active");
});