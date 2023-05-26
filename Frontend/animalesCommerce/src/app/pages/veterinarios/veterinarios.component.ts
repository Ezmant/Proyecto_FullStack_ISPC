import { Component, OnInit } from '@angular/core';
import { ListadoVeterinariosService } from 'src/app/services/listado-veterinarios.service';

@Component({
  selector: 'app-veterinarios',
  templateUrl: './veterinarios.component.html',
  styleUrls: ['./veterinarios.component.css']
})
export class VeterinariosComponent implements OnInit{

  lista: any;

  constructor(private listVet:ListadoVeterinariosService) { }

  ngOnInit(): void {
    this.listaVeterinarios();
  }

  listaVeterinarios():void {
    this.listVet.verVeterinarios().subscribe({
      next: (response) => {
        this.lista = response
      },
      error: (errorResponse) => {
        console.error(errorResponse)
      }
    })
  }
  
}
