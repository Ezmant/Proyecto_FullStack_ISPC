import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { MiCuentaService } from 'src/app/services/mi-cuenta.service';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit{
  form;
  lista: any;
  constructor(private formBuilder:FormBuilder, private miCuenta:MiCuentaService) {
    this.form=this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      nombre:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      dni:['',[Validators.required, Validators.minLength(7), Validators.maxLength(8)]],
      telefono:['',[Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      ciudad:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      codigoPostal:['',[Validators.required, Validators.minLength(4), Validators.maxLength(5)]]
    })
  }

  ngOnInit(): void {
    this.lista = this.listaMiCuenta();
  }

  listaMiCuenta():any {
    this.miCuenta.verMiCuenta().subscribe({
      next: (response) => {
        this.lista = response
      },
      error: (errorResponse) => {
        console.error(errorResponse)
      }
    })
  }

  get email(){
    return this.form.get("email")
  }
  get nombre(){
    return this.form.get("nombre")
  }
  get dni(){
    return this.form.get("dni")
  }
  get telefono(){
    return this.form.get("telefono")
  }
  get ciudad(){
    return this.form.get("ciudad")
  }
  get codigoPostal(){
    return this.form.get("codigoPostal")
  }

  onEnviar(event:Event){
    event.preventDefault();
    if (this.form.valid) {
      alert("Guardando en el servidor...")
    }
    this.form.markAllAsTouched()
  }
}
