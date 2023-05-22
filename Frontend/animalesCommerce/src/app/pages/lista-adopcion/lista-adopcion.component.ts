import { Component, OnInit } from '@angular/core';
import { ListaAdopcionService } from 'src/app/services/lista-adopcion.service';


@Component({
  selector: 'app-lista-adopcion',
  templateUrl: './lista-adopcion.component.html',
  styleUrls: ['./lista-adopcion.component.css']
})
export class ListaAdopcionComponent implements OnInit{

  lista: any;

  constructor(private listAdop:ListaAdopcionService) { }

  ngOnInit(): void {
    this.lista = this.listaAdopcion();
  }

  listaAdopcion():any {
    this.listAdop.verListaAdopcion().subscribe({
      next: (response) => {
        this.lista = response
      },
      error: (errorResponse) => {
        console.error(errorResponse)
      }
    })
  }
}
