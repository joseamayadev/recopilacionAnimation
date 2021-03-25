window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var hero = document.querySelector(".hero");
  hero.style.backgroundPosition = "0%" + (window.scrollY / 100) * 0.9 + "%";
  header.classList.toggle("sticky", window.scrollY > 0);
});
