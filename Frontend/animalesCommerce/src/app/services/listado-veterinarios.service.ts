import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListadoVeterinariosService {

  url:string = "http://localhost:3000/"
  
  constructor(private http:HttpClient) { }

  verVeterinarios():Observable<any>{
    return this.http.get<any>(this.url + "veterinarios")}

}
