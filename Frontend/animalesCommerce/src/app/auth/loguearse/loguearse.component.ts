import { Component} from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-loguearse',
  templateUrl: './loguearse.component.html',
  styleUrls: ['./loguearse.component.css']
})
export class LoguearseComponent {

  loguearse;
  invalidEmail:Boolean = false;
  invalidPass:Boolean = false;
  formValid:Boolean = false;


  constructor(private formBuilder:FormBuilder) {
    this.loguearse=this.formBuilder.group({
      email:'',
      password:''
    })
  }

  validarForm(){
    if ((this.loguearse.value.email == "" || !this.loguearse.value.email?.includes('@') || !this.loguearse.value.email?.includes('.')) && this.loguearse.value.password == "") {
      this.invalidEmail = true
      this.invalidPass = true
      this.formValid = false
    }
    else if (this.loguearse.value.email == "" || !this.loguearse.value.email?.includes('@') || !this.loguearse.value.email?.includes('.')){
      this.invalidEmail = true
      this.invalidPass = false
      this.formValid = false
    }
    else if (this.loguearse.value.password == ""){
      this.invalidEmail = false
      this.invalidPass = true
      this.formValid = false
    }
    else {
      this.invalidEmail = false
      this.invalidPass = false
      this.formValid = true
    }
  }

  submitForm(event:Event){
    event.preventDefault();
    this.validarForm()
  }

}
