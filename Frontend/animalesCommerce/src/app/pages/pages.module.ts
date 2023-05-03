import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetFriendlyComponent } from './pet-friendly/pet-friendly.component';
import { VeterinariosComponent } from './veterinarios/veterinarios.component';



@NgModule({
  declarations: [
    PetFriendlyComponent,
    VeterinariosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
