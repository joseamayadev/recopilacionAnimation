const cuerpo = document.body;
const cursor = document.querySelector(".cursor");

cuerpo.addEventListener("mousemove", (e) => {
  var x = e.pageX;
  var y = e.pageY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});
