import Scrollbar from 'smooth-scrollbar';

 Scrollbar.init(document.querySelector('#myScrollbar'),{damping:0.04});

 var mouse = document.querySelector(".mouse")

window.addEventListener("mousemove",(e)=> {
    e.preventDefault;

    var xC = e.clientX;
    var yC = e.clientY;
    var x = e.offsetX;
    var y = e.offsetY;
    var test2 = e.target.offsetLeft;
    var test = e.target.offsetTop;
    //console.log(x);
    //console.log(y);
    console.log(test);
     console.log(test2);
    mouse.style.top = test + "px";
    mouse.style.left = test2 + "px";
    
}) 