function iniciar() {

  movimientos = 0;
  reparteTarjetas(niveles[nivelActual].tarjetas);
  document.querySelector("#mov").innerText = "00";
  
  document.querySelector(".selecciona-nivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");
  document.querySelector(".cabecera").classList.add("visible");


  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    //LUIS
    mostrarRapidamente(elemento);
    //END
    elemento.addEventListener("click", descubrir);
  });

  
  if(modoHard== true) {
    iniciarCronometroHard();
  }else if (modoRelax) {
    document.querySelector("#cronometro").classList.add("cronometro-oculto");
  } else {
    //LUIS
    setTimeout(function(){
      iniciaCronometro();
    }, 1500);
    //END
  }

  
//LUIS
  if (modoContrareloj) {
    document.querySelector("#contenedor-mov").classList.add("movimiento-oculto");
  }
  else{
    maxContador();
  }
//END
}

function iniciarHard()
{
  movimientos = 0;
  reparteTarjetas(niveles[nivelActual].tarjetas);
  document.querySelector("#mov").innerText = "00";
  maxContador();
  document.querySelector(".selecciona-nivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");
  document.querySelector(".cabecera").classList.add("visible");
  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    mostrarRapidamente(elemento);
    elemento.addEventListener("click", descubrir);
  });
  ContinuarContador();
}

function reiniciar() {
  nivelActual = 0;
  actualizaNivel();
  iniciar();
}

function iniciaJuegoNormal() {
  modoHard = false;
  modoRelax = false;  
  modoContrareloj  = false;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
  document.querySelector(".control-nivel").classList.add("control-oculto");
}

function iniciaJuegoRelax() {
  modoHard = false;
  modoRelax = true;
  modoContrareloj  = false;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
}

//Luis
function iniciaJuegoContrareloj() {
  modoHard = false;
  modoRelax = false;
  modoContrareloj  = true;
  document.querySelector("#bienvenida").classList.remove("visible");
  document.querySelector(".control-nivel").classList.add("control-oculto");
  iniciar();
}
//END

function iniciaJuegoHard()
{
  modoHard = true;
  modoRelax = false;
  modoContrareloj  = false;
  document.querySelector("#bienvenida").classList.remove("visible");
  document.querySelector(".control-nivel").classList.add("control-oculto");
  iniciarHard();
}