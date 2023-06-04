import { Component } from '@angular/core';
import { RefugiosService } from 'src/app/services/refugios.service';

@Component({
  selector: 'app-refugios',
  templateUrl: './refugios.component.html',
  styleUrls: ['./refugios.component.css']
})
export class RefugiosComponent {
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
