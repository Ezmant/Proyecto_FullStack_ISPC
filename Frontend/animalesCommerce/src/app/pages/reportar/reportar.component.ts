import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reportar',
  templateUrl: './reportar.component.html',
  styleUrls: ['./reportar.component.css']
})
export class ReportarComponent {
  form;
  invalidEmail:Boolean= false;
  invalidAddress:Boolean= false;
  formValid:Boolean= false;
  invalidDescription:Boolean= false;

  constructor(private formbuilder:FormBuilder){
  this.form=this.formbuilder.group({
    email:"",
    direccion:"",
    descripcion:"",
  })
  }
   validarForm(){
    if ((this.form.value.email == "" || !this.form.value.email?.includes("@") || !this.form.value.email?.includes(".")) && this.form.value.direccion == "" && this.form.value.descripcion == ""){
        this.invalidEmail= true
        this.invalidAddress= true
        this.invalidDescription= true
        this.formValid= false
    }
    else if ((this.form.value.email == "" || !this.form.value.email?.includes("@") || !this.form.value.email?.includes(".")) && this.form.value.direccion == ""){
      this.invalidEmail= true
      this.invalidAddress= true
      this.invalidDescription= false
      this.formValid= false
  }
  else if ((this.form.value.email == "" || !this.form.value.email?.includes("@") || !this.form.value.email?.includes(".")) && this.form.value.descripcion == ""){
    this.invalidEmail= true
    this.invalidAddress= false
    this.invalidDescription= true
    this.formValid= false
}
else if (this.form.value.direccion == ""  && this.form.value.descripcion == ""){
  this.invalidEmail= false
  this.invalidAddress= true
  this.invalidDescription= true
  this.formValid= false
}
    else if ((this.form.value.email == "" || !this.form.value.email?.includes("@") || !this.form.value.email?.includes("."))){
      this.invalidEmail= true
      this.invalidAddress= false
      this.invalidDescription=false
      this.formValid= false
    }
    else if (this.form.value.direccion == ""){
      this.invalidEmail=false
      this.invalidAddress= true
      this.invalidDescription=false
      this.formValid= false
    }
    else if (this.form.value.descripcion == ""){
      this.invalidEmail=false
      this.invalidAddress=false
      this.invalidDescription= true
      this.formValid= false
    }
    else {
      this.invalidEmail=false
      this.invalidAddress=false
      this.invalidDescription=false
      this.formValid= true
    }
}

 submitForm(event:Event){
    event.preventDefault();
    this.validarForm()
    console.log(this.form.value)
  }
}
