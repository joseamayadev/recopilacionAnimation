var contenedor = document.querySelector(".contenedor");
var createSpan = document.createElement("span");
const btn = document.querySelector(".btn");
window.addEventListener("load",crear);
window.addEventListener("mousemove", btnMove);

setInterval(mov, 2000);

function crear() {
    var i;
    var test;

    for (i = 0; i < 250; i++) {
        var newSpan = document.createElement('span');
        var demodiv = document.getElementById('contenedor');
        var left = Math.random() * innerWidth;
        var top = Math.random() *innerHeight;
        demodiv.appendChild(newSpan);
        newSpan.style.top = top + "px";
        newSpan.style.right = left + "px";
        //newSpan.style.backgroundColor = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`
        newSpan.style.backgroundColor = "white"

       
        
    } 

}

function mov() {
      for (i = 0; i < 250; i++) {
        var posiciones = document.querySelectorAll("span");
        var left = Math.random() * innerWidth;
        var top = Math.random() * innerHeight;
        posiciones[i].style.visibility = "visible";
        posiciones[i].style.transform= `translateY(${parseInt(top - 300)}px`;
        posiciones[i].style.left= left +"px";
        //posiciones[i].style.backgroundColor = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;
    }    
}

function btnMove(e) {
    var y = e.clientY;
    var x = e.clientX;
    btn.style.top = y +"px";
    btn.style.left = x + "px";
    console.log(y)
}


