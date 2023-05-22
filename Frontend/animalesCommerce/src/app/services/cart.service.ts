import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getCart(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/cart`);
  }

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/cart`, product);
  }

  removeFromCart(product: Product): Observable<{}> {
    const url = `${this.apiUrl}/cart/${product.id}`;
    return this.http.delete(url);
  }
}

