import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent, Product } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a product to the cart', () => {
    const product: Product = { id: 1, name: 'Product 1', price: 10 };
    component.addToCart(product);
    expect(component.cartItems.length).toBe(1);
    expect(component.cartItems[0]).toEqual(product);
  });

  it('should remove a product from the cart', () => {
    const product1: Product = { id: 1, name: 'Product 1', price: 10 };
    const product2: Product = { id: 2, name: 'Product 2', price: 20 };
    component.addToCart(product1);
    component.addToCart(product2);
    component.removeFromCart(product1);
    expect(component.cartItems.length).toBe(1);
    expect(component.cartItems[0]).toEqual(product2);
  });

  it('should calculate the total correctly', () => {
    const product1: Product = { id: 1, name: 'Product 1', price: 10 };
    const product2: Product = { id: 2, name: 'Product 2', price: 20 };
    component.addToCart(product1);
    component.addToCart(product2);
    const total = component.getTotal();
    expect(total).toBe(30);
  });
});

