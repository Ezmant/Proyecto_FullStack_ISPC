import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent implements OnInit {
  registro: boolean = false;
  registrarse: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }


  
  ngOnInit(): void {
    this.registrarse = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]],
      passcon: ['', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      direccion: ['', [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-zA-Z]).{3,}$')]],
      localidad: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      provincia: ['', [Validators.required, Validators.pattern('[a-zA-ZÁ-Úá-ú ]*')]],
    })
    
  }

  
  submitForm() {
    if (this.registrarse.invalid) {
      return Object.values(this.registrarse.controls).forEach((control) => {
        control.markAllAsTouched();
        this.registro = true;
    });
  } 
}
}


/*
export class RegistrarseComponent {

  registrarse: FormGroup;
  invalidEmail:Boolean = false;
  invalidPass:Boolean = false;
  invalidPasscon:Boolean = false;
  invalidDni:Boolean = false;
  invalidDireccion:Boolean = false;
  invalidLocalidad:Boolean = false;
  invalidProvincia:Boolean = false;
  formValid:Boolean = false;


  constructor(private formBuilder:FormBuilder) {
    this.registrarse=this.formBuilder.group({
      email:'',
      password:'',
      passcon:'',
      dni:'',
      direccion:'',
      localidad:'',
      provincia:'',
      mensaje:'',
    })
  }

  validarForm(){
// Llenado de datos para validación //
      let email= this.registrarse.value.email;
      let password= this.registrarse.value.password;
      let passcon= this.registrarse.value.passcon;
      let dni= this.registrarse.value.dni;
      let direccion= this.registrarse.value.direccion;
      let localidad= this.registrarse.value.localidad;
      let provincia= this.registrarse.value.provincia;
      let mensaje = '';

// expresion regular email //

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!emailRegex.test(email)) {
  mensaje += 'El Mail no es válido';
  this.invalidEmail = true;
} else {
  this.invalidEmail = false;
}

// validando contraseña //

const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
if (!passRegex.test(password)) {
  mensaje += 'La contraseña debe de contener 8 caracteres, entre ellos un número, una minúsucula, y una mayúscula';
  this.invalidPass = true;
} else {
  this.invalidPass = false;
}

//validando confirmación de contraseña //

if (passcon != password) {
  mensaje += 'La confimación de contraseña debe ser igual a la contraseña';
  this.invalidPasscon = true;
} else {
  this.invalidPasscon = false;
}

// validando dni //

const dniRegex = /^[0-9]{8}$/;

if (!dniRegex.test(dni)) {
  mensaje += 'El DNI debe de tener 8 dígitos';
  this.invalidDni = true;
} else {
  this.invalidDni = false;
}

// validando la dirección //
const direccionRegex = /^[a-zA-Z0-9\s.,#-]{5,}$/;
if (!direccionRegex.test(direccion)) {
  mensaje += 'La dirección debe de tener al menos 5 caracteres';
  this.invalidDireccion = true;
} else {
  this.invalidDireccion = false;
}

// validando la localidad //
const localidadRegex =/^[a-zA-Z\s]{1,20}$/;
if (!localidadRegex.test(localidad)) {
  mensaje += 'La localidad debe tener de 1 a 20 caracteres';
  this.invalidLocalidad = true;
} else {
  this.invalidLocalidad = false;
}

// validando la provincia //

if (provincia === 'Seleccionar') {
  mensaje += 'La provincipa debe ser diferente a Seleccionar';
  this.invalidProvincia = true;
} else {
  this.invalidProvincia = false;
}

if (!this.invalidEmail && !this.invalidPass && !this.invalidPasscon && !this.invalidDni && !this.invalidDireccion && !this.invalidLocalidad && !this.invalidProvincia) {
  this.formValid = true;
} else {
  this.formValid = false;
  }
}
*/
