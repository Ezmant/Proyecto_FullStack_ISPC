import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiCuentaComponent } from './mi_cuenta/mi_cuenta.component';
import { DonarComponent } from './donar/donar.component';



@NgModule({
  declarations: [
    MiCuentaComponent,
    DonarComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
