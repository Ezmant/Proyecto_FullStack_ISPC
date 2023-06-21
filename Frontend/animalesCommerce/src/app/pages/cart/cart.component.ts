import { Component } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: Product[] = [];

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  removeFromCart(product: Product) {
    const index = this.cartItems.findIndex((item) => item.id === product.id);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getTotal() {
    return this.cartItems.reduce((total, product) => total + product.price, 0);
  }
}
