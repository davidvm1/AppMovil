var secciones = [];
var tiempo_splash = 4400;
window.onload = function() {
	inicializarReferencias();

	/*document.getElementById('imgSplash').src = 'img/Splash.gif';
	setTimeout(cambiarSplash, tiempo_splash);*/
};

function inicializarReferencias() {
	secciones[1] = document.getElementById('amiPlan');
	secciones[2] = document.getElementById('pagarAmigo');
	secciones[3] = document.getElementById('amiGracias');
	secciones[4] = document.getElementById('patrPlan');
	secciones[5] = document.getElementById('pagarPatrocinador');
	secciones[6] = document.getElementById('patrGracias');
    secciones[7] = document.getElementById('guarPlan');
    secciones[8] = document.getElementById('pagarGuardian');
    secciones[9] = document.getElementById('guarGracias');
}

/*function cambiarSplash() {
	secciones[1].className = 'splash oculto';
	secciones[2].className = 'home';
}*/
// funcion para cambiar la seccion
function cambiarSeccion(id_seccion) {
	for (var i in secciones) {
		secciones[i].classList.add('oculto');
	}

	secciones[id_seccion].classList.add('animated');
	secciones[id_seccion].classList.add('fadeIn');
	secciones[id_seccion].classList.remove('oculto');
}
