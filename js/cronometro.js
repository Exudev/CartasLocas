function iniciaCronometro() {
  //LUIS
  
  if(modoContrareloj){

    if (segundos == 0)
    {
      segundos = 20;
    }

   }
   else {

    segundos = niveles[nivelActual].tiempo;
    
   }


  //END
  var minutos = 0;
  var segundosTexto;
  var minutosTexto;

  function actualizaContador() {
    segundos--;
    if (segundos < 0) {
      segundos = 59;
      minutos--;
    }
    if (minutos < 0) {
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro);
      timeOver();
    }
    segundosTexto = segundos;
    minutosTexto = minutos;
    if (segundos < 10) {
      segundosTexto = "0" + segundos;
    }
    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    }
    document.querySelector("#minutos").innerText = minutosTexto;
    document.querySelector("#segundos").innerText = segundosTexto;
  }
  cronometro = setInterval(actualizaContador, 1000);
}

var hsegundos = 59;
var minutos = 7;
function iniciarCronometroHard()
{
  var segundosTexto;
  var minutosTexto;

  function actualizaContadorHard() {
    hsegundos--;
    if (hsegundos < 0) {
      hsegundos = 59;
      minutos--;
    }
    if (minutos < 0) {
      hsegundos = 0;
      minutos = 0;
      clearInterval(cronometro);
      timeOver();
    }
    segundosTexto = hsegundos;
    minutosTexto = minutos;
    if ((hsegundos < 10) &&( minutos= 0)) {
      segundosTexto = "0" + segundos;
    }
    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    }
    document.querySelector("#minutos").innerText = minutosTexto;
    document.querySelector("#segundos").innerText = segundosTexto;
  }
  cronometro = setInterval(actualizaContadorHard, 1000);

}

 function ContinuarContador()
  {
    function actualizaContadorHard() {
      hsegundos--;
      if (hsegundos < 0) {
        hsegundos = 59;
        minutos--;
      }
      if (minutos < 0) {
        hsegundos = 0;
        minutos = 0;
        clearInterval(cronometro);
        timeOver();
      }
      segundosTexto = hsegundos;
      minutosTexto = minutos;
      if ((hsegundos < 10) &&( minutos= 0)) {
        segundosTexto = "0" + hsegundos;
      }
      if (minutos < 10) {
        minutosTexto = "0" + minutos;
      }
      document.querySelector("#minutos").innerText = minutosTexto;
      document.querySelector("#segundos").innerText = segundosTexto;
    }
    cronometro = setInterval(actualizaContadorHard, 1000);
  }
