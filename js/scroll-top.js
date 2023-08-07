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