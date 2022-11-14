function validarForm(){
    let email = document.reporte.exampleFormControlInput1.value
    let direccion = document.reporte.formGroupExampleInput2.value
    let descripcion = document.reporte.exampleFormControlTextarea1.value
    let invalidEmail = document.getElementById("invalidEmail")
    let invalidAddress = document.getElementById("invalidAddress")
    let invalidDescription = document.getElementById("invalidDescription")
    let forValid = document.getElementById("formValid")
    if (email == "" && direccion == "" && descripcion == ""){
        invalidEmail.style.display="block"
        invalidAddress.style.display="block"
        invalidDescription.style.display="block"
    }
    else if (email == ""){
        invalidEmail.style.display="block"
        invalidAddress.style.display="none"
        invalidDescription.style.display="none"
    }
    else if (direccion == ""){
        invalidEmail.style.display="none"
        invalidAddress.style.display="block"
        invalidDescription.style.display="none"
    }
    else if (descripcion == ""){
        invalidEmail.style.display="none"
        invalidAddress.style.display="none"
        invalidDescription.style.display="block"
    }
    else {
        invalidEmail.style.display="none"
        invalidAddress.style.display="none"
        invalidDescription.style.display="none"
        forValid.style.display="block"
    }
}

function submitForm(event){
    event.preventDefault();
    validarForm()
  }