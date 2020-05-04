var delfin = document.getElementById('botonDelfin');
var nutria = document.getElementById('botonNutria');
var manati= document.getElementById('botonManati');
var animalElegido;
delfin.addEventListener('click',()=>{
    animalElegido='delfin'
})
nutria.addEventListener('click',()=>{
    animalElegido='nutria'
})
manati.addEventListener('click',()=>{
    animalElegido='manati'
})

var amigo= document.getElementById('pagoA');
var patrocinador = document.getElementById('pagoP');
var guardian = document.getElementById('pagoG');
var pagoM= document.getElementById('pagoMana');
var pagoD= document.getElementById('pagoDel');
var pagoN= document.getElementById('pagoNut');
var donador = document.getElementById('donadorTipo');
var planes="<br>";
amigo.addEventListener('click',()=>{
    cambiarImagen();
    if(document.getElementById('amigoAdq')==null){
        planes+="<h2 id='amigoAdq'>AMIGO</h2><br>";
        donador.innerHTML= planes;
    }
})
patrocinador.addEventListener('click',()=>{
    cambiarImagen();
    if(document.getElementById('patroAdq')==null){
        planes+="<h2 id='patroAdq'>PATROCINADOR</h2><br>";
        donador.innerHTML= planes;
    }
})
guardian.addEventListener('click',()=>{
    cambiarImagen();
    if(document.getElementById('guarAdq')==null){
        planes+="<h2 id='guarAdq'>GUARDIAN</h2><br>";
        donador.innerHTML= planes;
    }
})

function cambiarImagen(){
    if(animalElegido=='delfin'){
        pagoD.innerHTML="<img src='img/delfin_confirm.png'>";
    }
    else if(animalElegido=='nutria'){
        pagoN.innerHTML="<img src='img/nutria_confirm.png'>";
    }
    else if(animalElegido=='manati'){
        pagoM.innerHTML="<img src='img/manati_confirm.png'>";
    }
   
}
function agregarPlan(plan){
    
}
