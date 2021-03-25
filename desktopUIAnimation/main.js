const contenedor = document.querySelector(".contenedor");
const nav = document.getElementById("nav");
const miniCards = document.getElementById("mini-cards");
const upDown = document.getElementById("btn");
const bgMove = document.querySelector("body");

function animacionContenedor() {
  contenedor.style.width = "300px";
  document.querySelector("h2").style.tramnsition = "2s ease";
}

function animacionNav() {
  nav.style.display = "none";
  nav.style.transition = "3s ease;";
}

function animacionHamburger() {
  document.querySelector(".menu").style.visibility = "visible";
}

function scroll() {
  document.querySelector("span").style.transform = "translateY(-70px)";
  document.querySelector("h2").style.transform = "translateY(-200%)";
  document.querySelector(".mini-cards").style.transform = "translateY(-100%)";
  upDown.style.display = "block";
}

function scrollCards() {
  document.querySelector(".mini-cards").style.top = "";
  document.querySelector(".mini-cards").style.transform = "translateY(-250%)";
  upDown.style.display = "block";
}

function hiddenHome() {
  upDown.style.display = "none";
}

function hiddenCards() {
  upDown.style.display = "none";
}

function final() {
  contenedor.style.width = "80%";
  contenedor.style.heigth = "80%";
  nav.style.display = "block";
  document.querySelector("span").style.visibility = "hidden";
  miniCards.style.display = "block";
  document.querySelector("span").style.transform = "translateY(0px)";
  document.querySelector("h2").style.transform = "translateY(0px)";
}
function bgAnimateInitial() {
  bgMove.style.backgroundPosition = "300%";
  bgMove.style.transition = "8s ease";
}

function bgAnimateFinal() {
  bgMove.style.backgroundPosition = "120%";
  bgMove.style.transition = "2s ease";
}

/*tiempos de animaciones*/
setInterval(bgAnimateFinal, 6000);
setInterval(bgAnimateInitial, 1000);
setTimeout(animacionContenedor, 1200);
setTimeout(animacionNav, 2300);
setTimeout(animacionHamburger, 2800);
setTimeout(scroll, 4000);
setTimeout(hiddenHome, 4200);
setTimeout(scrollCards, 6000);
setTimeout(hiddenCards, 6500);
setTimeout(final, 7100);

/*animando el background*/
