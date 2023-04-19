
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
              alert("Formulario enviado");
  
      }
        form.classList.add('was-validated')
      }, false)
    }
    )
  })()
  
  
  
