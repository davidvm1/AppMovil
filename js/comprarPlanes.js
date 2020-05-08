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
var animalesUsuario=[];
var planesUsuario=[];
function plnyAdop(){
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    var correoo = document.getElementById("correo").value;
    var usuarioFiltrado = usuarios.filter(usuario => usuario.correo === correoo);
    if(!usuarioFiltrado[0].animales==null){
        if(usuarioFiltrado[0].animales.includes('delfin')){
            pagoD.innerHTML="<img src='img/delfin_confirm.png'>";
            animalesUsuario[animalesUsuario.length+1]='delfin';
        }
        if(usuarioFiltrado[0].animales.includes('nutria')){
            pagoN.innerHTML="<img src='img/nutria_confirm.png'>";
            animalesUsuario[animalesUsuario.length+1]='nutria';
        }
        if(usuarioFiltrado[0].animales.includes('manati')){
            pagoM.innerHTML="<img src='img/manati_confirm.png'>";
            animalesUsuario[animalesUsuario.length+1]='manati';
        }

        if(usuarioFiltrado[0].planes.includes("amigo")){
            if(document.getElementById('amigoAdq')==null){
                planes+="<h2 id='amigoAdq'>AMIGO</h2><br>"; 
                donador.innerHTML=planes;    
                planesUsuario[planesUsuario.length+1]='amigo';      
            }
        }
        if(usuarioFiltrado[0].planes.includes("patrocinador")){
            if(document.getElementById('patroAdq')==null){
                planes+="<h2 id='patroAdq'>PATROCINADOR</h2><br>";
                donador.innerHTML= planes;
                planesUsuario[planesUsuario.length+1]='patrocinador'; 
            }
        }
        if(usuarioFiltrado[0].planes.includes("guardian")){
            if(document.getElementById('guarAdq')==null){
                planes+="<h2 id='guarAdq'>GUARDIAN</h2><br>";
                donador.innerHTML= planes;
                planesUsuario[planesUsuario.length+1]='guardian'; 
            }
        }
    }
}
amigo.addEventListener('click',()=>{
    cambiarImagen();
    if(document.getElementById('amigoAdq')==null){
        planes+="<h2 id='amigoAdq'>AMIGO</h2><br>";
        donador.innerHTML= planes; 
        agrPlanUsu('amigo');       
    }
})
patrocinador.addEventListener('click',()=>{
    cambiarImagen();
    if(document.getElementById('patroAdq')==null){
        planes+="<h2 id='patroAdq'>PATROCINADOR</h2><br>";
        donador.innerHTML= planes;
        agrPlanUsu('patrocinador');
    }
})
guardian.addEventListener('click',()=>{
    cambiarImagen();
    if(document.getElementById('guarAdq')==null){
        planes+="<h2 id='guarAdq'>GUARDIAN</h2><br>";
        donador.innerHTML= planes;
        agrPlanUsu('guardian');
        console.log('hola');
    }
})
function agrPlanUsu(plan){
        if(!planesUsuario.includes(plan)){
            planesUsuario[planesUsuario.length+1]=plan;
            usuarios = JSON.parse(localStorage.getItem("usuarios"));
            var correoo = document.getElementById("correo").value;
            var usuarioFiltrado = usuarios.filter(usuario => usuario.correo === correoo);
            usuarioFiltrado[0].planes=planesUsuario;
            console.log(planesUsuario)
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
    }

function agrAnimUsu(animal){
        if(!animalesUsuario.includes(animal)){
            animalesUsuario[animalesUsuario.length+1]=animal;
            usuarios = JSON.parse(localStorage.getItem("usuarios"));
            var correoo = document.getElementById("correo").value;
            var usuarioFiltrado = usuarios.filter(usuario => usuario.correo === correoo);
            usuarioFiltrado[0].animales=animalesUsuario;
            console.log(animalesUsuario)
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
    }


function cambiarImagen(){
    if(animalElegido=='delfin'){
        pagoD.innerHTML="<img src='img/delfin_confirm.png'>";
        agrAnimUsu('delfin');
    }
    else if(animalElegido=='nutria'){
        pagoN.innerHTML="<img src='img/nutria_confirm.png'>";
        agrAnimUsu('nutria');
    }
    else if(animalElegido=='manati'){
        pagoM.innerHTML="<img src='img/manati_confirm.png'>";
        agrAnimUsu('manati');
    }
   
}

function cerrarSesion(){
    pagoM.innerHTML="<img src='img/manati_usuario.png'>";
    pagoD.innerHTML="<img src='img/delfin_usuario.png'>";
    pagoN.innerHTML="<img src='img/nutria_usuario.png'>";
    donador.innerHTML="<br><h2>Todavía no tienes ningún plan</h2><br>";
    cambiarSeccion(14);
    planes="";
    planesUsuario.length=0
    animalesUsuario.length=0
}
