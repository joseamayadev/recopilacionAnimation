let progress = document.querySelector("span");
let totalheight = document.body.scrollHeight - window.innerHeight;
let mover = document.querySelector(".porcentaje");

window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalheight) * 100;
  progress.textContent = Math.round(progressHeight) + "%";
};
