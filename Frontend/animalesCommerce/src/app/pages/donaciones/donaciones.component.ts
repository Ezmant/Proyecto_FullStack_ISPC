
import { Component } from '@angular/core';
import { DonacionesService } from 'src/app/services/donaciones.service';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent {

  datos:any;
 constructor (private listPersonas: DonacionesService){}

ngOnInit():void{
  this.verDonaciones();
}

verDonaciones():void{
  this.listPersonas.getDonaciones().subscribe({
    next:(response)=>(
      this.datos=response
       //console.log(this.datos)
      ),
    error: (errorResponse)=> (
      console.error(errorResponse)
    )
  })
 }
}
