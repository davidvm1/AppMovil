var secciones = [];
var parrafo = [];
var titulos = [];
var imagen;
var tiempo_splash = 2600;
var usuarioLocal = "";
var correoLocal = "";
var contraLocal = "";
var nombreLocal = "";
var nombreCLocal = "";
var apellidosLocal = "";
window.onload = function() {
	inicializarReferencias();
	cambiarSeccion(22);
	setTimeout(cambiarSplash, tiempo_splash);
};

function inicializarReferencias() {
	//velasquez
	
	secciones[1] = document.getElementById('amiPlan');
	secciones[2] = document.getElementById('pagarAmigo');
	secciones[3] = document.getElementById('amiGracias');
	secciones[4] = document.getElementById('patrPlan');
	secciones[5] = document.getElementById('pagarPatrocinador');
	secciones[6] = document.getElementById('patrGracias');
    secciones[7] = document.getElementById('guarPlan');
    secciones[8] = document.getElementById('pagarGuardian');
	secciones[9] = document.getElementById('guarGracias');
	secciones[10]=document.getElementById('nutria');
	secciones[11]=document.getElementById('manati');
	secciones[12]=document.getElementById('delfin');
	//vieira
	secciones[13]=document.getElementById('signup');
	secciones[14]=document.getElementById('login');
	secciones[15]=document.getElementById('recuperar');
	secciones[16]=document.getElementById('nueva_contra');
	secciones[17]=document.getElementById('usuario');
	secciones[18]=document.getElementById('datos_personales');
	//Franco
	secciones[19]=document.getElementById('inicio');	
	secciones[20]=document.getElementById('planesAdopcion');
	//Eche
	secciones[21]=document.getElementById('seguimSeccion');
	secciones[22] = document.getElementById('splash');
	

	//Eche
	parrafo[1] = document.getElementById('parrafo1');
	parrafo[2] = document.getElementById('parrafo2');
	parrafo[3] = document.getElementById('parrafo3');
	parrafo[4] = document.getElementById('parrafo4');
	parrafo[5] = document.getElementById('parrafo5');
	parrafo[6] = document.getElementById('parrafo6');
	parrafo[7] = document.getElementById('parrafo7');
	parrafo[8] = document.getElementById('parrafo8');
	titulos[1] = document.getElementById('titulo1');
	titulos[2] = document.getElementById('titulo2');
	titulos[3] = document.getElementById('titulo3');
	imagen = document.getElementById('mapaSeg');
}

function cambiarTxt(caller){
	if(caller=="segdelfin"){
		imagen.src="img/mapadelfin.png";
		titulos[1].innerHTML ="Poblacion";
		titulos[1].style.color="#A8CCC9";
		titulos[2].innerHTML="Alimentacion";
		titulos[2].style.color="#A8CCC9";
		titulos[3].innerHTML="Estatus del habitat";
		titulos[3].style.color="#A8CCC9";
		titulos[2].innerHTML="Alimentacion";
		titulos[3].innerHTML="Estatus del habitat";
		parrafo[1].innerHTML="Durante nueve días se recorrió un tramo de 950 kilómetros, pasando por <strong>Perú</strong>, <strong>Colombia</strong> y <strong>Brasil</strong>.";
		parrafo[2].innerHTML="Los científicos agrupados en la Iniciativa de Delfines de Río de Sudamérica <strong>(SARDI)</strong>, registraron 484 delfines rosados.";
		parrafo[3].innerHTML="La mayor cantidad de delfines que se encontraron fue entre <strong>Perú</strong> y <strong>Colombia</strong>, mientras que hubo una reducción evidente en el sector <strong>brasileño del río Amazonas</strong>";
		parrafo[4].innerHTML="Las represas impiden la migración de los peces, por lo que disminuye el suministro de alimentos. Además, las presas dividen las comunidades de este cetáceo suramericano, pudiendo ocasionar un aislamiento genético.";
		parrafo[5].innerHTML="Las observaciones en campo de delfines permiten saber que comen una gran variedad de especies como ciclidos (tucunares, mojarras), carácidos (pirañas, palometas, payaras) y loricaridos, bagres, dormilones, hasta más de 50 especies diferentes de peces.";
		parrafo[6].innerHTML="";
		parrafo[7].innerHTML="El incremento de los niveles de contaminación y la destrucción progresiva de la selva amazónica aumentan la vulnerabilidad del delfín rosado.";
		parrafo[8].innerHTML="Las poblaciones del Inia geoffrensis habitan arriba y debajo de los rápidos que tienen algunos ríos de la cuenca del Amazonas. La construcción de represas hidroeléctricas repercute negativamente en el desarrollo del delfín rosado, ya que modifica el ambiente y su alimentación.";
	}
	if(caller=="segmanati"){
		imagen.src="img/mapmanati.png";
		titulos[1].innerHTML="Poblacion";
		titulos[1].style.color="#75929A";
		titulos[2].innerHTML="Alimentacion";
		titulos[2].style.color="#75929A";
		titulos[3].innerHTML="Estatus del habitat";
		titulos[3].style.color="#75929A";
		parrafo[1].innerHTML="Un muestreo con sonar de barrido lateral realizado en el río Lagarto y en la parte baja del río Yasuní (Tambococha y Jatuncocha), en la <strong>Amazonía de Ecuador</strong>, determinó que la población de manatíes amazónicos (Trichechus inunguis) en el país es de aproximadamente 150 individuos.";
		parrafo[2].innerHTML="Además, se identificó que su densidad poblacional en la parte baja de la <strong>Amazonía ecuatoriana</strong> varía entre 0.94 y 1.09 individuos por kilómetro cuadrado, evidenciando una densidad poblacional baja.";
		parrafo[3].innerHTML="";
		parrafo[4].innerHTML="Se elaboró un listado de 32 plantas consumidas por el manatí en la zona de estudio durante el periodo de aguas altas.";
		parrafo[5].innerHTML="La principal fuente de alimento para los manatíes durante la época de aguas altas son las gramíneas representadas principalmente por el <strong>gramalote</strong> (70% ) y la <strong>paja de agua</strong> (66%).";
		parrafo[6].innerHTML="Otras gramíneas consumidas por el manatí son: paja manatiza, arrocillo, pierdevega.";
		parrafo[7].innerHTML="El <strong>incremento de la temperatura</strong> del agua podría beneficiar a estos seres sensibles al frío. De hecho, algunos especialistas creen que podría originar un aumento del <strong>tamaño del hábitat</strong>.";
		parrafo[8].innerHTML="Ahora bien, el aumento del nivel del mar causado por el derretimiento de los polos surge como un problema y es que se podrían ampliar el número de diques o presas para evitar el paso del agua, con la consecuente reducción de los pastos marinos de los que los manatíes se alimentan.";
	}
	if(caller=="segnutria"){
		imagen.src="img/mapanutria.png";
		titulos[1].innerHTML="Poblacion";
		titulos[1].style.color="#956D4F";
		titulos[2].innerHTML="Alimentacion";
		titulos[2].style.color="#956D4F";
		titulos[3].innerHTML="Estatus del habitat";
		titulos[3].style.color="#956D4F";
		parrafo[1].innerHTML="Gracias a un estudio realizado por un equipo de científicos del Instituto de Biología de la Conservación de España <strong>(IBiCo)</strong> y con el apoyo de la <strong>Fundación Barcelona Zoo</strong> y de la <strong>Fundación Omacha</strong>; se encontró que la población de nutrias en el río Orinoco está creciendo.";
		parrafo[2].innerHTML="Dicho estudio se desarrolló durante las estaciones secas de los años 2018 y 2019 a lo largo de 38 kilómetros del <strong>río Orinoco</strong>,  arrojando un total de 30 nutrias registradas en 5 grupos y otras dos solitarias.";
		parrafo[3].innerHTML="";
		parrafo[4].innerHTML="La nutria gigante de río ya está bajo presión por la destrucción del hábitat y la caza ilegal, y los incendios también amenazan a los peces, que constituyen una gran parte de la dieta de la nutria gigante de río.";
		parrafo[5].innerHTML="Con más de 3.000 especies de peces en la Amazonía, muchas de las cuales están altamente especializadas en su hábitat y recursos alimenticios, el efecto de los incendios en la química del agua y la temperatura del agua podría tener efectos drásticos.";
		parrafo[6].innerHTML="";
		parrafo[7].innerHTML="La vulnerabilidad de la población de nutrias gigantes del Manu a las perturbaciones antropogénicas enfatiza la importancia de la protección efectiva de los hábitats centrales de los lagos en particular.";
		parrafo[8].innerHTML="Los bosques ribereños son el ecosistema en mayor peligro de extinción en el Departamento de Madre de Dios debido a la concentración de la extracción de oro, la tala y las actividades agrícolas en las llanuras aluviales.";
	}
}

function cambiarSplash() {
	cambiarSeccion(14);
}
// funcion para cambiar la seccion
function cambiarSeccion(id_seccion) {
	for (var i in secciones) {
		secciones[i].classList.add('oculto');
	}
	secciones[id_seccion].classList.add('animated');
	secciones[id_seccion].classList.add('fadeIn');
	secciones[id_seccion].classList.remove('oculto');
}
function pagoAceptado(p){
	var pago=document.getElementsByClassName("gracias");
	var nombre = document.getElementById("pnombre").value;
	var apeshidos = document.getElementById("apellido").value;
	pago.textContent='';
	for(var i in pago){
		pago[i].innerHTML="¡Gracias "+nombre+" "+apeshidos+"!<br>"+
		"Con tu apoyo ayudas a<br> la conservación de<br> estas maravillosas<br> especies";
	}
	if(p=="a"){
		cambiarSeccion(3);
	}
	else if(p=="b"){
		cambiarSeccion(6);
	}
	else if(p=="c"){
		cambiarSeccion(9);
	}
}
function pagoDeclinado(){
	var pago=document.getElementsByClassName("gracias");
	pago.textContent='';
	for(var i in pago){
		pago[i].innerHTML="Lo sentimos, "+nombre+" "+apeshidos+""+
		"Ha ocurrido un error en el proceso de pago."+ 
		"Inténtalo más tarde.";
	}
	
}

function datosLocales(event){
	var correo = "";
	var aux = "";
	if(event == "btn_login"){
		correo = document.getElementById("correo_login").value;
	}
	else if(event == "btn_signup"){
		correo = document.getElementById("correo_signup").value;
		aux = correo;
	}
	setInfo(correo);
}


function setInfo(correo){
	var corr = correo;
	usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
	var usuarios_filtrados = usuarios.filter(usuario => usuario.correo === corr);
	this.correoLocal = usuarios_filtrados[0].correo;
	this.contraLocal = usuarios_filtrados[0].contrasena;
	this.nombreLocal = usuarios_filtrados[0].nombre_y_apellido;
	this.nombreCLocal = nombreLocal;
	var nombre = nombreLocal.split(" ");
	for(var i = 0; i < nombre.length;i++){
		if(i==0){
			nombreLocal=nombre[i];
		}else apellidosLocal += nombre[i]+" ";
	}
	setDatos();
}

function setDatos(){
	document.getElementById("nombrePerf").innerHTML=nombreCLocal;
	document.getElementById("pnombre").value = nombreLocal;
	document.getElementById("apellido").value = apellidosLocal;
	document.getElementById("correo").value = correoLocal;
	plnyAdop();
}

function guardarCambios(){
	var corr = document.getElementById("correo").value;
	var contra = document.getElementById("contra").value;
	var contraNueva = document.getElementById("nuevacontra").value;
	var nombre = document.getElementById("pnombre").value;
	var apeshidos = document.getElementById("apellido").value;
	var nombrenuevo = nombre+" "+apeshidos;
	usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
	var usuarios_filtrados = usuarios.filter(usuario => usuario.correo === corr);
	if(contra==usuarios_filtrados[0].contrasena){
		for(var i in usuarios){
			if(usuarios[i].correo==corr){
				if(contraNueva!=usuarios[i].contrasena){
					usuarios[i].nombre_y_apellido = nombrenuevo;
					usuarios[i].contrasena = contraNueva;
					localStorage.setItem("usuarios", JSON.stringify(usuarios));
					alert("Contra cambiada");
					document.getElementById("contra").value = "";
					document.getElementById("nuevacontra").value = "";
					cambiarSeccion(19);
				}
				else {
					alert("La contraseña debe ser diferente a la actual");
					cambiarSeccion(19);
				}
			}
		}
	}
	else{
		alert("La contraseña actual no coincide");
	}
}

function seleccionarImg(){
	document.getElementById('perfilImagen').click();
}

function handleFiles(){
	var fakepath = document.getElementById('perfilImagen').value;
	var path = fakepath.split("\\");
	var imagen = document.getElementById("foto_perfil");
	var imgmin = document.getElementById("foto_perfil_menor");
	imagen.src="img/fotosperfil/"+path[2];
	imagen.style.height = "115px";
	imagen.style.width = "115px";
	imagen.style.setProperty("border-radius","50%", "important");
	imgmin.src="img/fotosperfil/"+path[2];
	imgmin.style.height = "115px";
	imgmin.style.width = "115px";
	imgmin.style.borderRadius = "50%";
}


