/*el programa aqui*/


var cajas = document.querySelectorAll(".cajas");
var i;
var title = document.querySelector("h1");



/*try {
    setTimeout(animacion,4000);
   function animacion() {
    for (i = 0; i < cajas.length; i++){
        cajas[i].dataset.delay= true;}
        ;}    
} catch (error) {
    console.log(error);  
}*/

setInterval(testFunction,1000);
setInterval(titulos,5000);

var i = 0;
function testFunction() {
    if (i < cajas.length) {
       var acum = i++;
       cajas[acum].dataset.delay= true;
    } 
}

function titulos() {
     title.dataset.titulo= true;

    } 


