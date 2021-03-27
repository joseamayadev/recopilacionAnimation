var fecha = new Date();
var dia = document.getElementById("dia");
var hora = document.getElementById("hora");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");


var timer = {
    dia: function() {
        dia.innerText = fecha.getDay();
    },
    hora: function() {
        hora.innerText= fecha.getHours();
    },
    minutos: () => {
        minutos.innerText=fecha.getMinutes();
    },
    segundos: function() {
        var sec = fecha.getSeconds();
        console.log(sec)  
    }

}


function play() {
    timer.dia();
    timer.hora();
    timer.minutos();
    timer.segundos(); 

}

function tim() {
    var f = new Date();
    dia.innerText = f.getDay();
    hora.innerText = f.getHours();
    minutos.innerText = f.getMinutes();
    segundos.innerText= f.getSeconds();
}

setInterval(tim,1000);


/*animaciones*/

var valX= window.innerWidth;
var tl = gsap.timeline({repeat: -1, delay:3});
tl.to(".animacion-fondo", {x: 900, duration: 3}),
tl.to(".animacion-fondo", {x: 0, y:200, duration: 3})



/*usando treejs*/

const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			const animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();


