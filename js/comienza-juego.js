// Escribimos los niveles dinámicamente
escribeNiveles();

// Asignamos eventos iniciales
document.querySelectorAll(".reiniciar").forEach(function(elemento) {
  elemento.addEventListener("click", reiniciar);
});

document
  .querySelector("#juego-normal")
  .addEventListener("click", iniciaJuegoNormal);
document
  .querySelector("#juego-relax")
  .addEventListener("click", iniciaJuegoRelax);
//LUIS
document
  .querySelector("#juego-contrareloj")
  .addEventListener("click", iniciaJuegoContrareloj);
//END
document
.querySelector("#juego-hard")
.addEventListener("click", iniciaJuegoHard);
document
  .querySelector("#control-nivel")
  .addEventListener("click", muestraMenuNiveles);
document
  .querySelector("#cierra-niveles")
  .addEventListener("click", ocultaMenuNiveles);

document.querySelectorAll("#nivel").forEach(function(elemento) {
  elemento.addEventListener("click", cambiaNivel);
});

if(modoHard== true)
{
  document.querySelector("#subir").addEventListener("click", cargaNuevoNivelHard);
} else
{
  document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);
} 

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);

document.querySelector("body").addEventListener("click", clickFueraDeMenu);

document.addEventListener("keydown", teclaEscCierraMenu);

//Mostramos pantalla de bienvenida
document.querySelector("#bienvenida").classList.add("visible");
