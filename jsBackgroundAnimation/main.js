//defino los colores del array de colores

colors = ["white", "black", "orange", "red", "green"];

function animarFondo() {
  const cuerpo = document.querySelector("body");
  const crearSpan = document.createElement("span");

  var tamano = Math.random() * 50;
  crearSpan.style.width = 20 + tamano + "px";
  crearSpan.style.height = 20 + tamano + "px";

  //agrega los parametros de las propiedades de posición absoluta

  crearSpan.style.top = Math.random() * innerHeight + "px";
  crearSpan.style.left = Math.random() * innerWidth + "px";
  //definiendo los colores de fondo

  const bg = colors[Math.floor(Math.random() * colors.length)];
  crearSpan.style.background = bg;

  cuerpo.appendChild(crearSpan);

  setTimeout(() => {
    crearSpan.remove();
  }, 5000);
}

setInterval(animarFondo, 150);
