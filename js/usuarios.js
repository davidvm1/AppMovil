document.addEventListener("DOMContentLoaded", function () {
    var usuarios = [];
    const nombre_apellido_input = document.getElementById("nombre_signup");
    const correo_input = document.getElementById("correo_signup");
    const correo_conf_input = document.getElementById("correo_conf_signup");
    const contra_input = document.getElementById("contra_signup");
    const contra_conf_input = document.getElementById("contra_conf_signup");
    const signup_form = document.getElementById("signup_form");
    const btn_signup = document.getElementById("btn_signup");

    function correoExiste(correo) {
        usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
        var usuarios_filtados = usuarios.filter(usuario => usuario.correo === correo);
        if (usuarios_filtados.length === 0) {
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
                    contrasena: contra_input.value
                });
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                btn_signup.addEventListener('onclick',cambiarSeccion(19))
            }
        }
        event.preventDefault();
    }

    signup_form.addEventListener('submit', registrar);


});
