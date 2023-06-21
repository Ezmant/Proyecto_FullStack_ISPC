import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-reportar',
  templateUrl: './reportar.component.html',
  styleUrls: ['./reportar.component.css'],
})


export class ReportarComponent implements OnInit {
  form;
  invalidEmail: Boolean = false;
  invalidAddress: Boolean = false;
  formValid: Boolean = false;
  invalidDescription: Boolean = false;

  ngOnInit(): void {false}//ver que este false no genere errores, lo agregue por que si no me mostraba mensajes como ingrese correo

  constructor(private FormBuilder : FormBuilder){
    this.form = this.FormBuilder.group({
      email: ['',[Validators.email,Validators.required,Validators.minLength(8)]],
      direccion: ['',[Validators.minLength(6),Validators.required]],
      descripcion: ['',[Validators.required]],
      motivo:['',[Validators.required,Validators.minLength(10)]]
    });
  }

  get email(){
    return this.form.get("email");
  }
  get direccion(){
    return this.form.get("direccion");
  }
  get descripcion(){
    return this.form.get("descripcion");
  }
  get motivo(){
    return this.form.get("motivo");
  }

  validarForm() {
    if (
      (this.form.value.email == '' ||
        !this.form.value.email?.includes('@') ||
        !this.form.value.email?.includes('.')) &&
      this.form.value.direccion == '' &&
      this.form.value.descripcion == ''
    ) {
      this.invalidEmail = true;
      this.invalidAddress = true;
      this.invalidDescription = true;
      this.formValid = false;
    } else if (
      (this.form.value.email == '' ||
        !this.form.value.email?.includes('@') ||
        !this.form.value.email?.includes('.')) &&
      this.form.value.direccion == ''
    ) {
      this.invalidEmail = true;
      this.invalidAddress = true;
      this.invalidDescription = false;
      this.formValid = false;
    } else if (
      (this.form.value.email == '' ||
        !this.form.value.email?.includes('@') ||
        !this.form.value.email?.includes('.')) &&
      this.form.value.descripcion == ''
    ) {
      this.invalidEmail = true;
      this.invalidAddress = false;
      this.invalidDescription = true;
      this.formValid = false;
    } else if (
      this.form.value.direccion == '' &&
      this.form.value.descripcion == ''
    ) {
      this.invalidEmail = false;
      this.invalidAddress = true;
      this.invalidDescription = true;
      this.formValid = false;
    } else if (
      this.form.value.email == '' ||
      !this.form.value.email?.includes('@') ||
      !this.form.value.email?.includes('.')
    ) {
      this.invalidEmail = true;
      this.invalidAddress = false;
      this.invalidDescription = false;
      this.formValid = false;
    } else if (this.form.value.direccion == '') {
      this.invalidEmail = false;
      this.invalidAddress = true;
      this.invalidDescription = false;
      this.formValid = false;
    } else if (this.form.value.descripcion == '') {
      this.invalidEmail = false;
      this.invalidAddress = false;
      this.invalidDescription = true;
      this.formValid = false;
    } else {
      this.invalidEmail = false;
      this.invalidAddress = false;
      this.invalidDescription = false;
      this.formValid = true;
    }
  }
  submitForm(event: Event) {
    event.preventDefault();
    if (this.form.valid){
      alert("Enviar al servidor...")
    }else{
      this.form.markAsTouched();
    }
    console.log(this.form.value);
  }


}
