var noche = document.querySelector(".luna");
var dia = document.querySelector(".sol");
var contenedor = document.querySelector(".contenedor-circulo");

noche.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  noche.style.opacity = "0";
  noche.style.transform = "translateX(-90px)";
  dia.style.opacity = "1";
  contenedor.style.border = "8px solid white";
  document.querySelector(".contenedor-modos").style.color = "white";
  document.querySelector(".texto").style.color = "white";
});

dia.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  noche.style.opacity = "1";
  dia.style.opacity = "0";
  contenedor.style.border = "8px solid black";
  dia.style.transform = "translateX(20px)";
  noche.style.transform = "translateX(0)";
  document.querySelector(".contenedor-modos").style.color = "black";
  document.querySelector(".texto").style.color = "black";
});
