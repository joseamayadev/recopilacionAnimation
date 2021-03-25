/*codigo para cambio de colores con js evento click*/
var btnCeleste = document.querySelector("#celeste");
var btnRojo = document.querySelector("#rojo");
var btnMorado = document.querySelector("#morado");

btnCeleste.addEventListener("click", () => {
  document.getElementById("imagen").src = "AWESOME-UI-CARDSCELESTE.png";
});

btnRojo.addEventListener("click", () => {
  document.getElementById("imagen").src = "AWESOME-UI-CARDS2.png";
});

btnMorado.addEventListener("click", () => {
  document.getElementById("imagen").src = "AWESOME-UI-CARDSVIOLETA.png";
});

//Moviendo el background con la posición del moouse

window.onmousemove = function () {
  var main = document.querySelector("main");
  var x = window.event.clientX;
  var y = window.event.clientY;
  main.style.backgroundPositionX = "0" + (x / 100) * 5 + "%";
};
