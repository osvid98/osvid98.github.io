  /* Scroll to top*/
  window.onscroll = function() { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scroll-to-top").style.display = "block";
    } else {
      document.getElementById("scroll-to-top").style.display = "none";
    }
  }

  document.getElementById("scroll-to-top").addEventListener("click", function() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para otros navegadores
  });



/* Menu Hamburguesa */
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');
const body = document.body;

menuBtn.addEventListener('click', () => {
  toggleMenu();
});

closeBtn.addEventListener('click', () => {
  closeMenu();
});

// Función para cerrar el menú
function closeMenu() {
  menu.classList.remove('active');
  body.classList.remove('no-scroll');
}

// Función para manejar el clic en elementos del menú
function handleMenuItemClick() {
  const menuItems = document.querySelectorAll('.menu a');
  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const href = item.getAttribute('href');
      closeMenu();
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });
}

// Función para alternar entre abrir y cerrar el menú
function toggleMenu() {
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) {
    body.classList.add('no-scroll');
    handleMenuItemClick();
  } else {
    body.classList.remove('no-scroll');
  }
}
