function validarForm(){
    let email = document.registro.inputEmail4.value
    let contrasena = document.registro.inputPassword4.value
    let contrasena2 = document.registro.inputPassword5.value
    let dni = document.registro.inputZip.value
    let direccion = document.registro.inputAddress.value
    let localidad = document.registro.inputCity.value
    let invalidEmail = document.getElementById("invalidEmail")
    let invalidPass = document.getElementById("invalidPass")
    let invalidPass2 = document.getElementById("invalidPass2")
    let invalidDNI = document.getElementById("invalidDNI")
    let invalidAddress = document.getElementById("invalidAddress")
    let invalidLocation = document.getElementById("invalidLocation")
    let forValid = document.getElementById("formValid")
    if (email == "" && contrasena == "" && contrasena2 == "" && dni == "" && direccion == "" && localidad == ""){
        invalidEmail.style.display="block"
        invalidPass.style.display="block"
        invalidPass2.style.display="block"
        invalidDNI.style.display="block"
        invalidAddress.style.display="block"
        invalidLocation.style.display="block"
    }
    else if (email == ""){
        invalidEmail.style.display="block"
        invalidPass.style.display="none"
        invalidPass2.style.display="none"
        invalidDNI.style.display="none"
        invalidAddress.style.display="none"
        invalidLocation.style.display="none"
    }
    else if (contrasena == ""){
        invalidEmail.style.display="none"
        invalidPass.style.display="block"
        invalidPass2.style.display="none"
        invalidDNI.style.display="none"
        invalidAddress.style.display="none"
        invalidLocation.style.display="none"
    }
    else if (contrasena2 == ""){
        invalidEmail.style.display="none"
        invalidPass.style.display="none"
        invalidPass2.style.display="block"
        invalidDNI.style.display="none"
        invalidAddress.style.display="none"
        invalidLocation.style.display="none"
    }
    else if (dni == ""){
        invalidEmail.style.display="none"
        invalidPass.style.display="none"
        invalidPass2.style.display="none"
        invalidDNI.style.display="block"
        invalidAddress.style.display="none"
        invalidLocation.style.display="none"
    }
    else if (direccion == ""){
        invalidEmail.style.display="none"
        invalidPass.style.display="none"
        invalidPass2.style.display="none"
        invalidDNI.style.display="none"
        invalidAddress.style.display="block"
        invalidLocation.style.display="none"
    }
    else if (localidad == ""){
        invalidEmail.style.display="none"
        invalidPass.style.display="none"
        invalidPass2.style.display="none"
        invalidDNI.style.display="none"
        invalidAddress.style.display="none"
        invalidLocation.style.display="block"
    }
    else {
        invalidEmail.style.display="none"
        invalidPass.style.display="none"
        invalidPass2.style.display="none"
        invalidDNI.style.display="none"
        invalidAddress.style.display="none"
        invalidLocation.style.display="none"
        forValid.style.display="block"
    }
}

function submitForm(event){
    event.preventDefault();
    validarForm()
  }