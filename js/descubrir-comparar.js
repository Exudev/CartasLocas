//LUIS
function mostrarRapidamente(elemento)
{
  setTimeout(function(){
    elemento.classList.add("descubierta");
    document
    .querySelector("#sonido-carta")
    .play();
}, 500)
  setTimeout(function(){elemento.classList.remove("descubierta")}, 2000)
}
//END

function descubrir() {
  var descubiertas;
  var tarjetasPendientes;
  var totalDescubiertas = document.querySelectorAll(
    ".descubierta:not(.acertada)"
  );

  if (totalDescubiertas.length > 1) {
    return;
  }

  this.classList.add("descubierta");
  
  document
    .querySelector("#sonido-carta")
    .cloneNode()
    .play();

  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  if (descubiertas.length < 2) {
    return;
  }

  comparar(descubiertas);

//LUIS
  if(!modoContrareloj)
  {
  actualizaContador();
  }
//END

  tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
  if (tarjetasPendientes.length === 0) {
    setTimeout(finalizar, 1000);
  }
}

function comparar(tarjetasAComparar) {
  if (
    tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor
  ) {
    acierto(tarjetasAComparar);
  } else {
    error(tarjetasAComparar);
  }
}
