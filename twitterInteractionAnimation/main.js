var uno = document.querySelector("#uno");
var dos = document.querySelector("#dos");
var tres = document.querySelector("#tres");
var cuatro = document.querySelector("#cuatro");
var cinco = document.querySelector("#cinco");
var seis = document.querySelector("#seis");
var siete = document.querySelector("#siete");
var ocho = document.querySelector("#ocho");
var nueve = document.querySelector("#nueve");
var diez = document.querySelector("#diez");
var heart = document.querySelector(".contenedor-heart");
var pathe = document.querySelector("path");
var clic = 0;

heart.addEventListener("click", testeo);

function testeo() {
    clic = clic +1;

    if (clic > 1 ) {
    uno.classList.remove("uno");
    dos.classList.remove("dos");
    tres.classList.remove("tres");
    cuatro.classList.remove("cuatro");
    cinco.classList.remove("cinco");
    seis.classList.remove("seis");
    siete.classList.remove("siete");
    ocho.classList.remove("ocho");
    nueve.classList.remove("nueve");
    diez.classList.remove("diez");
    pathe.style.fill ="white";
    clic = 0;

    } else {
    uno.classList.add("uno");
    dos.classList.add("dos");
    tres.classList.add("tres");
    cuatro.classList.add("cuatro");
    cinco.classList.add("cinco");
    seis.classList.add("seis");
    siete.classList.add("siete");
    ocho.classList.add("ocho");
    nueve.classList.add("nueve");
    diez.classList.add("diez");
    pathe.style.fill ="black";

}

    }









