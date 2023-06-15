import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonacionesService {
  constructor(private http: HttpClient) {}

  getDonaciones(): Observable<any> {
    return this.http.get('http://localhost:3000/donaciones');
  }

 // getDonaciones(){
   // this.http.get("http://localhost:3000/donaciones").subscribe((data)=>{
     // console.log(data);
    //});
  }
