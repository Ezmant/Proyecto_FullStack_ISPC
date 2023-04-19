function validarForm(){
    let monto = document.donacion.monto.value
    let montoInvalid = document.getElementById("montoInvalid")
    let montoValid = document.getElementById("montoValid")
    if (monto == "" || monto == 0){
        montoInvalid.style.display="block"
        montoValid.style.display="none"
    }
    else {
        montoInvalid.style.display="none"
        montoValid.style.display="block"
    }
}

function submitForm(event){
    event.preventDefault();
    validarForm()
  }