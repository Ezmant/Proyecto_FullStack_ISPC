import { Component } from '@angular/core';
import { Product } from './pages/product-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'animalesCommerce';
}

selectedProduct: Product = {
  id: 1,
  name: 'Product 1',
  price: 10,
  description: 'This is a sample product'
};
