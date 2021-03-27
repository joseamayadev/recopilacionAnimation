window.addEventListener("load", spin);

var loader = document.querySelector("#loader");
var body = document.querySelector("body");



function spin() {
    loader.style.display = "none"
    body.style.overflow = "visible"

}