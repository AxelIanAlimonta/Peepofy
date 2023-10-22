const usr = document.querySelector("#usr")
const pass = document.querySelector("#password")
const btn_ingresar = document.querySelector("#btn-ingresar")

if (localStorage.getItem("usuarios") == null)
    localStorage.setItem("usuarios", JSON.stringify({ pepe: { contrasenia: "1234" } }))

let usuarios = JSON.parse(localStorage.getItem("usuarios"))


function usuarioExiste(usuarioIngresado) {
    return usuarios.hasOwnProperty(usuarioIngresado)
}

function contraseniaCorrecta(usuarioIngresado, contraseniaIngresada) {
    return usuarios[usuarioIngresado].contrasenia == codificarContrasenia(contraseniaIngresada)
}

function codificarContrasenia(cad) {
    let cad1 = cad.substring(0, cad.length / 2)
    let cad2 = cad.substring(cad.length / 2, cad.length)

    return cad2 + cad1
}

function ingresar() {
    let usuarioIngresado = usr.value
    let contraseniaIngresada = pass.value

    if (usuarioExiste(usuarioIngresado) && contraseniaCorrecta(usuarioIngresado, contraseniaIngresada)){
        location.href = './pages/pantalla-principal.html'
        
    }
    else {
        document.querySelector("#msj-login").innerHTML = "El usuario y/o contraseña es incorrecto"
    }

}

btn_ingresar.addEventListener("click", ingresar)

let asfd = { sdf: "asdf" }
