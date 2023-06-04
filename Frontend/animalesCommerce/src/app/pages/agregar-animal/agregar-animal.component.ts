import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-agregar-animal',
  templateUrl: './agregar-animal.component.html',
  styleUrls: ['./agregar-animal.component.css']
})
export class AgregarAnimalComponent {
  form;

  constructor(private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      edad:['',[Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      raza:['',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      fecha:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]]
    })
  }

  get nombre(){
    return this.form.get("nombre")
  }
  get edad(){
    return this.form.get("edad")
  }
  get raza(){
    return this.form.get("raza")
  }
  get fecha(){
    return this.form.get("fecha")
  }

  onEnviar(event:Event){
    event.preventDefault();
    if (this.form.valid) {
      alert("Agregando Animal...")
    }
    this.form.markAllAsTouched()
  }
}
