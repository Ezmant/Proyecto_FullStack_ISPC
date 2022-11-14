

function validarDatos() {
    var animal=document.getElementById("animal").value
    var direccion=document.getElementById("direccion").value
    var ciudad=document.getElementById("cuidad").value
    var provincia=document.getElementById("provincia").value
    var cod_postal=document.getElementById("codigo_postal").value
    
    if (animal == "") {
        alert("Debe seleccionar un animal")
        document.getElementById("animal").focus();//este hace que valla al cuadro de texto del codigo postal para que lo digite
        return false
    }else {
        return true
    }
    
    if (direccion == "") {
        alert("Debe ingresar una direccion")
        document.getElementById("direccion").focus();//este hace que valla al cuadro de texto del codigo postal para que lo digite
        return false
    }else {
        return true
    }
    if (ciudad == "") {
        alert("Debe ingresar una cuidad")
        document.getElementById("cuidad").focus();//este hace que valla al cuadro de texto del codigo postal para que lo digite
        return false
    }else {
        return true
    }
    if (provincia == "") {
        alert("Debe ingresar una provincia")
        document.getElementById("provincia").focus();//este hace que valla al cuadro de texto del codigo postal para que lo digite
        return false
    }else {
        return true
    }
    if (cod_postal == "") {
        alert("Debe ingresar un codigp postal")
        document.getElementById("cod_postal").focus();//este hace que valla al cuadro de texto del codigo postal para que lo digite
        return false
    }else {
        return true
    }

}


