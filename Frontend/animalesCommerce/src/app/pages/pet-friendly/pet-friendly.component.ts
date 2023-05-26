import { Component } from '@angular/core';
import { RefugiosService } from 'src/app/services/refugios.service';

@Component({
  selector: 'app-pet-friendly',
  templateUrl: './pet-friendly.component.html',
  styleUrls: ['./pet-friendly.component.css']
})
export class PetFriendlyComponent {
  datos:any;

  constructor(private listRef:RefugiosService) {}

  ngOnInit():void{
    this.verRefugios();
  }

    verRefugios():void{
      this.listRef.getRefugios().subscribe({
        next: (response) => {
          this.datos = response
          console.log(this.datos)
        },
        error: (errorResponse) => {
          console.error(errorResponse)
        }
      })
  }
}
