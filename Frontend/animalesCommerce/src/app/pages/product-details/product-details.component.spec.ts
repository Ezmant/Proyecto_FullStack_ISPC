import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent, Product } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display product details', () => {
    const product: Product = {
      id: 1,
      name: 'Product 1',
      price: 10,
      description: 'This is a sample product',
      photoUrl: 'https://example.com/image.jpg',
      animalType: 'Dog',
      size: 'Medium',
      breed: 'Labrador Retriever',
    };
    component.product = product;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(product.name);
    expect(compiled.querySelector('img').src).toContain(product.photoUrl);
    expect(compiled.querySelector('p:nth-child(3)').textContent).toContain(`Price: ${product.price}`);
    expect(compiled.querySelector('p:nth-child(4)').textContent).toContain(`Description: ${product.description}`);
    expect(compiled.querySelector('p:nth-child(5)').textContent).toContain(`Animal Type: ${product.animalType}`);
    expect(compiled.querySelector('p:nth-child(6)').textContent).toContain(`Size: ${product.size}`);
    expect(compiled.querySelector('p:nth-child(7)').textContent).toContain(`Breed: ${product.breed}`);
  });
});

