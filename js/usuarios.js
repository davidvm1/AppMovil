document.addEventListener("DOMContentLoaded", function () {
    var usuarios = [];
    

    //Referencias Elementos Sign Up
    const nombre_apellido_input = document.getElementById("nombre_signup");
    const correo_input = document.getElementById("correo_signup");
    const correo_conf_input = document.getElementById("correo_conf_signup");
    const contra_input = document.getElementById("contra_signup");
    const contra_conf_input = document.getElementById("contra_conf_signup");
    const signup_form = document.getElementById("signup_form");
    const btn_signup = document.getElementById("btn_signup");

    //Referencias Elementos Login
    const login_form = document.getElementById("login_form");
    const correo_login = document.getElementById("correo_login");
    const contra_login = document.getElementById("contra_login");
    const btn_login = document.getElementById("btn_login");

    //Referencias Eche
    const prueba = document.getElementById("prueba1");

    function correoExiste(correo) {
        usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
        var usuarios_filtrados = usuarios.filter(usuario => usuario.correo === correo);
        if (usuarios_filtrados.length === 0) {
            return false;
        }
        return true;
    }

    function cuentaExiste(correo, contra){
        usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
        var usuarios_filtrados = usuarios.filter(usuario => usuario.correo === correo);
        usuarios_filtrados = usuarios_filtrados.filter(usuario => usuario.contrasena === contra);
        if (usuarios_filtrados.length === 0) {
            return false;
        }
        return true;
    }

    function registrar(event) {
        if (correo_input.value === correo_conf_input.value && contra_input.value === contra_conf_input.value) {
            if (correoExiste(correo_input.value) === false) {
                usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
                usuarios.push({
                    nombre_y_apellido: nombre_apellido_input.value,
                    correo: correo_input.value,
                    contrasena: contra_input.value,
                    fotoperfil: "img/foto_perfil.png"
                });
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                btn_signup.addEventListener('onclick',onclicksingup());
            }
        }
        else {
            swal("Error","El correo o contraseña ingresados no concuerdan.", "error");
        }
        event.preventDefault();
    }

    signup_form.addEventListener('submit', registrar);

    function logear(event){
        if(cuentaExiste(correo_login.value, contra_login.value) === true){
            btn_login.addEventListener('onclick', cambiarSeccion(19));
        }
        else {
            swal("Error","El correo ingresado no existe o la contraseña es incorrecta.", "error");
        }
        event.preventDefault();
    }

    function onclicksingup(){
        var nombrelocal=nombre_apellido_input.value;
        var nombre = nombre_apellido_input.value.split(" ");
        var apellido = nombre_apellido_input.value.split(" ");
        var apellidos = "";
        for(var i = 0; i < apellido.length;i++){
            if(i==0){
                
            }else apellidos += apellido[i]+" ";
        }
        document.getElementById("nombrePerf").innerHTML=nombrelocal;
        document.getElementById("correo").value=correo_input.value;
        document.getElementById("pnombre").value=nombre[0];
        document.getElementById("apellido").value=apellidos;
        var data=document.getElementsByClassName("datos");
        var fecha= new Date();
        var dataP=" "+nombrelocal+" "+apellidos+" <br>"+fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getUTCFullYear()+"<br>"+correo_input.value;
        for(i in data){
            data[i].innerHTML="";
            data[i].innerHTML=dataP;
        }
        cambiarSeccion(23);
    }
    login_form.addEventListener('submit', logear);
});
