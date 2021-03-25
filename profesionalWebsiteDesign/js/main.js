window.addEventListener("scroll", function () {
  var header = document.querySelector(".pop");
  header.classList.toggle("sticky", window.scrollY > 0);
});

var Ipop = document.querySelector(".pop");

function pop() {
  Ipop.style.visibility = "hidden";
}
setTimeout(pop, 6000);
