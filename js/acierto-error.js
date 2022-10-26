function acierto(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("acertada");
  });
  document.querySelector("#sonido-acierto").play();
}

function error(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
 
  });

  document.querySelector("#sonido-error").play();

  setTimeout(function() {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.remove("descubierta");
    });
  }, 1000);
}
