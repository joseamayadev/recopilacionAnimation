const root = document.querySelector(":root");
document.addEventListener("mousemove", (e) => {
  root.style.setProperty("--x", e.clientX + "px");
  root.style.setProperty("--y", e.clientY + "px");
});
