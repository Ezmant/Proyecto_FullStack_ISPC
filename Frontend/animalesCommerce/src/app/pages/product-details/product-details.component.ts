import { Component, OnInit, Input } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  photoUrl: string;
  animalType: string;
  size: string;
  breed: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}

