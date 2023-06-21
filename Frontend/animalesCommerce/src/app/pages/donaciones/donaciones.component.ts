
import { Component, OnInit } from '@angular/core';
import { DonacionesService } from 'src/app/services/donaciones.service';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  datos:any;
 constructor (private listPersonas: DonacionesService){}

ngOnInit():void{
  this.verDonaciones();
}

verDonaciones():void{
  this.listPersonas.getDonaciones().subscribe({
    next:(response)=>(
      this.datos=response
      ),
    error: (errorResponse)=> (
      console.error(errorResponse)
    )
  })
 }
}
