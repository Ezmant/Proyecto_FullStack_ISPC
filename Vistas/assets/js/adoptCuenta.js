
(() => {

  const forms = document.querySelectorAll('.needs-validation')
  let text = document.getElementById("dinamic-text");

//validanto todo el formulario

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        alert("Por favor, complete todos los campos requeridos");
        text.innerHTML = "Por favor, complete todos los campos requeridos";
      }else{
            alert("Datos actualizados correctamente, redirigiendo al inicio");

    }
      form.classList.add('was-validated')
    }, false)
  }
  )

})()







/* form.addEventListener("submit", function (e) {
    e.preventDefault();

    let text = document.getElementById("dinamic-text");
    let x = document.forms["formulario"]["nombre","dni","email","phone","ciudad","postal"].value;

    if (x == "") {
      //alert("Todos los campos deben ser completados");
      text.innerHTML = "Todos los campos deben ser completados";
      return false;
    }     

});
 */