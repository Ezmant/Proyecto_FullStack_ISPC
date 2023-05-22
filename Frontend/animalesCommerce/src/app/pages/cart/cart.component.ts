import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product';
import { ShoppingCartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = [];
  cart: Product[] = [];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.getProducts().subscribe(products => {
      this.products = products;
    });

    this.shoppingCartService.getCart().subscribe(cart => {
      this.cart = cart;
    });
  }

  addToCart(product: Product) {
    this.shoppingCartService.addToCart(product).subscribe(() => {
      this.cart.push(product);
    });
  }

  removeFromCart(product: Product) {
    this.shoppingCartService.removeFromCart(product).subscribe(() => {
      this.cart = this.cart.filter(item => item.id !== product.id);
    });
  }
}


