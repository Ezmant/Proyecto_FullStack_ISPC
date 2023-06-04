import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaAdopcionService {
  url:string = "http://127.0.0.1:8000/api/pages/animales/"
  constructor(private http: HttpClient) { }

  verListaAdopcion():Observable<any> {
    return this.http.get<any>(this.url);
  }
}
