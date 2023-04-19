function validarForm(){
    let email = document.inicioSesion.exampleInputEmail1.value
    let password = document.inicioSesion.exampleInputPassword1.value
    let invalidEmail = document.getElementById("invalidEmail")
    let invalidPass = document.getElementById("invalidPass")
    let forValid = document.getElementById("formValid")
    if (email == "" && password == ""){
        invalidEmail.style.display="block"
        invalidPass.style.display="block"
    }
    else if (email == ""){
        invalidEmail.style.display="block"
        invalidPass.style.display="none"
    }
    else if (password == ""){
        invalidEmail.style.display="none"
        invalidPass.style.display="block"
    }
    else {
        invalidEmail.style.display="none"
        invalidPass.style.display="none"
        forValid.style.display="block"
    }
}

function submitForm(event){
    event.preventDefault();
    validarForm()
  }