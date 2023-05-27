import { Component} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-loguearse',
  templateUrl: './loguearse.component.html',
  styleUrls: ['./loguearse.component.css']
})
export class LoguearseComponent {

  form;

  constructor(private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]]
    })
  }

  get email(){
    return this.form.get("email")
  }

  get password(){
    return this.form.get("password")
  }

  onEnviar(event:Event){
    event.preventDefault();
    if (this.form.valid) {
      alert("Enviar al servidor...")
    }
    this.form.markAllAsTouched()
  }

}
