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

  ngOnInit(): void {
    console.log("El componente reportar se ha inicializado")
  }
  
  constructor(private FormBuilder : FormBuilder){
    this.form = this.FormBuilder.group({
      email: ['',[Validators.email,Validators.required,Validators.minLength(8)]],
      direccion: ['',[Validators.minLength(6),Validators.required]],
      descripcion: ['',[Validators.required]],
      motivo:['',[Validators.required]],
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

  submitForm(event: Event) {
    event.preventDefault();
    if (this.form.valid){
      alert("Se aprobo su reporte")
    }else{
      this.form.markAsTouched();
    }
  }
}
