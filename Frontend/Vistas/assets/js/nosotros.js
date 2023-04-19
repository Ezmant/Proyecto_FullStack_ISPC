

preventDefault()

function validarDatos() {
    var Name=document.getElementById("Name").value
    var Phone=document.getElementById("Phone").value
    var gmail=document.getElementById("gmail").value
    var Text=document.getElementById("Text").value
    

    /*Validación de formulario en proceso*/
    
    if (Name == "") {
        alert("Debe poner un nombre válido")
        document.getElementById("Name").focus();
        return false
    }else {
        return true
    }

    if (Phone == "") {
        alert("Debe ingresar un Número")
        document.getElementById("Phone").focus();
        return false
    }else {
        return true
    }

    if (gmail == "") {
        alert("Debe ingresar una dirección gmail")
        document.getElementById("gmail").focus();
        return false
    }else {
        return true
    }


    if (Text == "") {
        alert("Debe ingresar un Texto")
        document.getElementById("Text").focus();
        return false
    }else {
        return true
    }
    
    
}