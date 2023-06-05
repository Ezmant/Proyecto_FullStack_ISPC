import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  url:string = "http://127.0.0.1:8000/api/"
  constructor(private http: HttpClient) { }

  signup(data:any):Observable<any> {
    return this.http.post(this.url + "auth/signup/",data);
  }
}
