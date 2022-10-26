var expo1 = document.querySelector("#expo");
expo1.textContent="";
var botonHard = document.querySelector("#juego-hard");
var botonRelax= document.querySelector("#juego-relax");
var botonContra = document.querySelector("#juego-contrareloj");
var botonNormal = document.querySelector("#juego-normal");

botonHard.addEventListener("mouseover", hardenter);
botonHard.addEventListener("mouseout", hardsal);
botonRelax.addEventListener("mouseover", relaxenter);
botonRelax.addEventListener("mouseout", relaxsal);
botonContra.addEventListener("mouseover",  contraenter);
botonContra.addEventListener("mouseout", contrasal);
botonNormal.addEventListener("mouseover", normalenter);
botonNormal.addEventListener("mouseout", normalsal);


function hardenter()
{
expo1.textContent="En este modo de juego la cosa es chunga, gana todos los niveles con 8 minutos";

}
function hardsal()
{
expo1.textContent="";

}
function relaxenter()
{
expo1.textContent="Para entretenerte, este no es el competitivo amigo";

}
function relaxsal()
{
expo1.textContent="";

}
function contraenter()
{
expo1.textContent="En este modo de juego, el tiempo no es tu amigo, be like Sonic.";

}
function contrasal()
{
expo1.textContent="";

}
function normalenter()
{
expo1.textContent="El arcade de toda la vida.";

}
function normalsal()
{
expo1.textContent="";

}