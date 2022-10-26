function subeNivel() {
  nivelActual++;
}

function actualizaNivel() {
  var nivelTexto = nivelActual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }
  document.querySelector("#nivel").innerText = nivelTexto;
}

function cargaNuevoNivel() {
  //LUIS
  if(modoContrareloj){ segundos = 15 + segundos}
  //END
  subeNivel();
  actualizaNivel();
  iniciar();
}

function cargaNuevoNivelHard()
{
  subeNivel();
  actualizaNivel();
  iniciarHard();
}