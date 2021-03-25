var  span = document.getElementById("transicion");
var i;
titulos = ["Diseñador UI", "Diseñador Web", "Animador Web", "Emprendedor", "Programador"];


function test() {
    if (i < titulos.length) { 
    i++;   
    span.innerHTML = titulos[i -1];
    } else {
        i=0;
    }

        
}

setInterval(test, 2000);