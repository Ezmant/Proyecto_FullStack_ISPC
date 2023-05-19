import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgradecimientosService {

  constructor(private http: HttpClient) { }

  getAgradecimientos(): Observable<any>{
    return this.http.get("http://localhost:3000/agradecimientos")
  }
}
