import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AgradecimientosService } from 'src/app/services/agradecimientos.service';

@Component({
  selector: 'app-agradecimientos',
  templateUrl: './agradecimientos.component.html',
  styleUrls: ['./agradecimientos.component.css'],
})
export class AgradecimientosComponent {
  datos: any;
  constructor(private listPersonas: AgradecimientosService) {}

  ngOnInit(): void {
    this.verAgradecimientos();
  }

  verAgradecimientos(): void {
    this.listPersonas.getAgradecimientos().subscribe((Response) => {
      this.datos = Response;
      console.log(this.datos);
    });
  }
}
