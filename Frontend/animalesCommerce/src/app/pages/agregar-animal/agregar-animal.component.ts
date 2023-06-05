import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ListaAdopcionService } from 'src/app/services/lista-adopcion.service';

@Component({
  selector: 'app-agregar-animal',
  templateUrl: './agregar-animal.component.html',
  styleUrls: ['./agregar-animal.component.css']
})
export class AgregarAnimalComponent {
  form;

  constructor(private formBuilder:FormBuilder, private listAdop:ListaAdopcionService) {
    this.form=this.formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      edad:['',[Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      raza:['',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      tipo:'Gato',
      tamano:'Mediano',
      fecha_ingreso:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      id_refufio:1,
      id_tipo:2,
      img:""

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
    return this.form.get("fecha_ingreso")
  }

  onEnviar(event:Event){
    event.preventDefault();
    if (this.form.valid) {
      console.log(this.form.value)
      this.listAdop.agregar(this.form.value).subscribe({
        next: () => {
          alert("Se agrego Animal!")
        }
      })
    }
    this.form.markAllAsTouched()
  }

  // listaAdopcion():any {
  //   this.listAdop.verListaAdopcion().subscribe({
  //     next: (response) => {
  //       this.lista = response
  //     },
  //     error: (errorResponse) => {
  //       console.error(errorResponse)
  //     }
  //   })
  // }

  // agregarEstudio (formAgr: NgForm):void{
  //   this.datosPortfolio.agregarDatos(this.path,formAgr.value).subscribe({
  //   next: () => {
  //     this.verEstudios();
  //     this.agregar = false;
  //   }
  // })
  // }
}
