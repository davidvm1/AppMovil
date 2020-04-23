var secciones = [];
var parrafo = [];
var imagen;
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
	parrafo[1] = document.getElementById('parrafo1');
	parrafo[2] = document.getElementById('parrafo2');
	parrafo[3] = document.getElementById('parrafo3');
	parrafo[4] = document.getElementById('parrafo4');
	parrafo[5] = document.getElementById('parrafo5');
	imagen = document.getElementById('mapa');
}

function cambiarTxt(caller){
	var elemento = caller;
	if(caller=='pobmanati'){
		parrafo[1].innerHTML = "La <strong>reproducción</strong> del manatí amazónico está fuertemente asociada con el ciclo hidrológico de la región, es decir se realiza en la época de mayor abundancia de alimento.";
		parrafo[2].innerHTML = "El manatí se reproduce cada 5 a 7 años y su periodo de <strong>gestación</strong> suele ser de aproximadamente de 12 a 14 meses, tras los cuales solo nace <strong>una cría</strong>, que permanece junto a la madre unos dos años, hasta que está suficientemente desarrollada para iniciar su vida independiente.";
		parrafo[3].innerHTML = "Un muestreo con sonar de barrido lateral realizado en el río Lagarto y en la parte baja del río Yasuní (Tambococha y Jatuncocha), en la <strong>Amazonía de Ecuador</strong>, determinó que la población de manatíes amazónicos (Trichechus inunguis) en el país es de aproximadamente 150 individuos.";
		parrafo[4].innerHTML = "Además, se identificó que su densidad poblacional en la parte baja de la <strong>Amazonía ecuatoriana</strong> varía entre 0.94 y 1.09 individuos por kilómetro cuadrado, evidenciando una densidad poblacional baja.";
		parrafo[5].innerHTML = "";
		imagen.src="img/pobmanati.png";
	}
	else if(caller=='alimanati'){
		parrafo[1].innerHTML = "Puede pensarse que el incremento de la temperatura del agua podría beneficiar a estos seres <strong>sensibles al frío</strong>. De hecho, algunos especialistas creen que podría originar un <strong>aumento del tamaño del hábitat</strong>.";
		parrafo[2].innerHTML = "Muchos manatíes son propensos a<strong> morir</strong> durante las épocas de inviernos especialmente fuertes, pero sabiamente, los individuos de la especie migran hacia zonas de aguas más tibias, que superan los <strong>20 grados centígrados</strong>.";
		parrafo[3].innerHTML = "La principal fuente de alimento para los manatíes durante la época de aguas altas, según los entrevistados, son las <strong>gramíneas</strong> representadas principalmente por el gramalote (70% de mención) y la <strong>paja de agua</strong> (66% de mención).";
		parrafo[4].innerHTML = "Otras gramíneas consumidas por el manatí son: paja manatiza, arrocillo, pierdevega.";
		parrafo[5].innerHTML = "";
		imagen.src="img/alimanati.png";
	}
	else if(caller=='habmanati'){
		parrafo[1].innerHTML = "Se elaboró un listado de 32 plantas consumidas por el manatí en la zona de estudio durante el periodo de aguas altas.";
		parrafo[2].innerHTML = "Se colectaron 26 plantas pertenecientes a <strong>16 familias</strong>; estas especies fueron reportadas como fuente de alimento. Algunas mencionadas en las entrevistas no se encontraron durante la época de estudio.";
		parrafo[3].innerHTML = "Ahora bien, el aumento del nivel del mar causado por el <strong>derretimiento de los polos</strong> surge como un problema con diversas consecuencias, una de ellas es que se podrían ampliar el número de diques o presas para evitar el paso del agua, con la consecuente reducción de los pastos marinos de los que los manatíes se alimentan.";
		parrafo[4].innerHTML = "";
		parrafo[5].innerHTML = "";
		imagen.src="img/habmanati.png";
	}
	else if(caller=="pobdelfin"){
		parrafo[1].innerHTML = "La población de delfines rosados que ha logrado registrar los científicos en el Amazonas sigue siendo importante. Durante nueve días los expertos recorrieron un tramo de 950 kilómetros, pasando por <strong>Perú</strong>, <strong>Colombia</strong> y <strong>Brasil</strong>.";
		parrafo[2].innerHTML = "Los científicos agrupados en la Iniciativa de Delfines de Río de Sudamérica <strong>(SARDI)</strong>, registraron 484 delfines rosados ";
		parrafo[3].innerHTML = "La mayor cantidad de delfines que se encontraron fue entre <strong>Perú</strong> y <strong>Colombia</strong>, mientras que hubo una reducción evidente en el sector <strong>brasileño del río Amazonas</strong>.";
		parrafo[4].innerHTML = "";
		parrafo[5].innerHTML = "";
		imagen.src="img/pobdelfin.png";
	}
	else if(caller=="alidelfin"){
		parrafo[1].innerHTML = "Todos los delfines de río son carnívoros que se alimentan principalmente de <strong>peces</strong>, complementan su dieta con <strong>tortugas de agua y crustáceos</strong>.";
		parrafo[2].innerHTML = "Inia es una especie oportunista que captura peces desde 15 cm a grandes bagres de un metro de longitud. Se estima que pueden consumir unos 3 kg por día, aunque dependiendo de la época del año, comerán más o menos. En aguas bajas los peces se concentran en los canales de los ríos donde son más fáciles de capturar por los predadores. En contraste, en aguas altas, estos se dispersan en cientos de kilómetros de selva inundada, resultando más compleja su captura.";
		parrafo[3].innerHTML = "Adicionalmente, con los pulsos de inundación, se activan las migraciones reproductivas de miles de peces entre sistemas de lagos y ríos que hacen que los delfines se desplacen tras ellos para aprovechar al máximo la oportunidad de alimento.";
		parrafo[4].innerHTML = "Los estudios de contenidos estomacales y observaciones en campo de delfines permiten saber que comen una gran variedad de especies como <strong>ciclidos</strong> (tucunares, mojarras), carácidos (pirañas, palometas, payaras) y <strong>loricaridos, bagres, dormilones</strong>, hasta más de 50 especies diferentes de peces.";
		parrafo[5].innerHTML = "";
		imagen.src="img/alidelfin.png";
	}
	else if(caller=="habdelfin"){
		parrafo[1].innerHTML = "El incremento de los niveles de <strong>contaminación</strong> y la destrucción progresiva de la selva amazónica aumentan la vulnerabilidad del delfín rosado.";
		parrafo[2].innerHTML = "Así, la <strong>deforestación</strong> de las llanuras aluviales reduce la abundancia de las semillas y frutas que forman parte de la dieta de los peces de la región. Esto afecta la alimentación del delfín, ya que estos animales forman parte importante de la dieta del <strong>cetáceo</strong>.";
		parrafo[3].innerHTML = "Las poblaciones del Inia geoffrensis habitan arriba y debajo de los rápidos que tienen algunos ríos de la cuenca del Amazonas. La construcción de <strong>represas hidroeléctricas</strong> repercute negativamente en el desarrollo del delfín rosado, ya que modifica el ambiente y su alimentación.";
		parrafo[4].innerHTML = "En este sentido, estas estructuras impiden la migración de los peces, por lo que disminuye el suministro de alimentos. Además, las presas dividen las comunidades de este cetáceo suramericano, pudiendo ocasionar un aislamiento genético.";
		parrafo[5].innerHTML = "También, las represas restringen los movimientos de delfines y aperturan nuevas redes de comercialización, debido a que mejoran la navegabilidad de los ríos.";
		imagen.src="img/habdelfin.png";
	}
	else if(caller=="pobnutria"){
		parrafo[1].innerHTML = "La nutria gigante presenta una distribución restringida a <strong>Suramérica</strong> desde las <strong>Guayanas</strong> hasta el norte de <strong>Argentina, incluyendo Colombia, Venezuela, Ecuador, Perú, Bolivia, Brasil, Paraguay y Uruguay</strong>, extinta hoy en día en este último, y a punto de estarlo en Argentina.";
		parrafo[2].innerHTML = "En Colombia, se distribuye en una amplia zona que abarca cerca del 60% del territorio nacional, comprendiendo la cuenca del <strong>río Orinoco</strong> (afluentes: Arauca, Casanare, Ele, Lipa, Cravo Sur, Cusiana, Pautó, Meta, Manacacías, Bita, Vichada, Duda, Guayabero, Guaviare, Inírida) y la cuenca del Amazonas(afluentes: Putumayo, Caucayá, Caquetá, Cahuinarí, Apaporis, Mirití-Paraná y Vaupés. Después de la época de la cacería por pieles, las poblaciones de esta especie estaban muy reducidas o ausentes por completo cerca de grandes centros poblados como Leticia, Puerto Carreño, Inírida y Florencia. Sin embargo, en algunos de ellos se han ido recuperando y cada vez es más frecuente observar ejemplares en algunos de estos sitios.";
		parrafo[3].innerHTML = "";
		parrafo[4].innerHTML = "";
		parrafo[5].innerHTML = "";
		imagen.src="img/pobnutria.png";
	}
	else if(caller=="alinutria"){
		parrafo[1].innerHTML = "Para los perros de agua, la convivencia en grupo representa varias ventajas: les permite monopolizar excelentes territorios de caza, confundir a las presas y así capturarlas más fácilmente, también; también les permite defenderse de otros competidores como los caimanes.";
		parrafo[2].innerHTML = "Sin duda alguna su alimento preferido son los peces, pero ocasionalmente comen <strong>crustáceos, moluscos, anfibios, reptiles, aves e incluso pequeños mamíferos</strong>. Cazan a los peces haciendo algunas inmersiones cortas, de un poco más de 20 segundos.Los capturan usando los dientes y las patas delanteras, cuando las aguas son profundas es usual verlas saltando fuera de éstas para sumergirse nuevamente y de esta forma confundir y separar los cardúmenes. La hembra es quien usualmente lidera esta labor. Después de atrapar a la presa se ponen de espaldas dentro del agua o se apoyan en troncos o en orillas para comenzar a comérsela por la cabeza. Entre los peces que consume están: la mojarra, la cucha, el bocachico, la omima, el pintadillo, el lechero, la raya, el dormilón, el tucunare, la sabaleta, el picalón, el misiego y el cachorro. En general son animales oportunistas y su dieta varia de acuerdo a la región geográfica donde se encuentren.";
		parrafo[3].innerHTML = "Las nutrias <strong>neotropicales</strong> comen además de peces, cangrejos y caracoles. Si escasean los peces, pueden comer insectos, reptiles, aves y pequeños mamíferos. Si no son muy grandes se los comen dentro del agua , de lo contrario salen a las orillas o se van hacia las ramas emergidas de los árboles cercanos";
		parrafo[4].innerHTML = "";
		parrafo[5].innerHTML = "";
		imagen.src="img/alinutria.png";
	}
	else if(caller=="habnutria"){
		parrafo[1].innerHTML = "Las nutrias habitan en casi todo el mundo, a excepción de la <strong>Antártida y Australia</strong>. Existen en total 13 especies de las cuales solo dos se encuentran en el mar, la Enhydra lutris y la Lontra felina. Las otras especies habitan en lugares donde hay agua dulce";
		parrafo[2].innerHTML = "La nutria gigante se encuentra en: Colombia, Venezuela, Ecuador, Perú, Brasil, Paraguay y el nortede Argentina. En Uruguay esta nutria está <strong>extinta</strong>, al igual que en algunas zonas al interior de estos países. La nutria neotropical, se encuentra desde México hasta el norte de Argentina, sin embargo, ha desaparecido también en algunas zonas. En Colombia se distribuyen de la siguiente forma: la gigante, en las cuencas de los <strong>ríos Orinoco y Amazonas</strong>; y la neotropical, en el Caribe, Pacífico, Orinoco y Amazonas.";
		parrafo[3].innerHTML = "Ya que las nutrias están asociadas con el agua, habitan lugares como ríos, manglares y lagunas, siempre que no se encuentren muy intervenidos por el hombre, pues de lo contrario no hay suficiente alimento y lugares apropiados para las madrigueras.";
		parrafo[4].innerHTML = "";
		parrafo[5].innerHTML = "";
		imagen.src="img/habnutria.png";
	}
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
