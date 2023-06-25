import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RegistroService } from 'src/app/services/registro.service';

export function passwordConfirmationValidator(passwordControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get(passwordControlName)?.value;
    const confirmPassword = control.value;
    
    return password !== confirmPassword ? { passwordMismatch: true } : null;
  };
}

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  registro2: boolean = false;
  registrarse: FormGroup;

  constructor(private formBuilder: FormBuilder, private registro: RegistroService) {
    this.registrarse = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]],
      passcon: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      direccion: ['', [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-zA-Z]).{3,}$')]],
      localidad: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      provincia: ['', [Validators.required, Validators.pattern('[a-zA-ZÁ-Úá-ú ]*')]],
    }, { validators: [passwordConfirmationValidator('password')] });
  }

  ngOnInit(): void {}

  submitForm(event: Event) {
    event.preventDefault();

    if (this.registrarse.invalid) {
      this.registrarse.markAllAsTouched();
      alert('Por favor, complete correctamente todos los campos.');
      return;
    }

    this.registro.signup(this.registrarse.value).subscribe({
      next: (response) => {
        if (response) {
          alert('¡Registro exitoso!');
          this.registro2 = true;
        }
      },
      error: () => {
        alert('Ocurrió un error al procesar la solicitud. Por favor, inténtelo nuevamente más tarde.');
      }
    });
  }
}