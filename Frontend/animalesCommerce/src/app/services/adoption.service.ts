import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adoption } from '../adoption';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {
  private apiUrl = 'http://localhost:3000/adoptions';

  constructor(private http: HttpClient) { }

  getAdoptions(): Observable<Adoption[]> {
    return this.http.get<Adoption[]>(this.apiUrl);
  }
}
