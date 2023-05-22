import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from '../../services/product.service';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let productService: ProductService;

  beforeEach(async () => {
    const productServiceSpy = jasmine.createSpyObj('ProductService', ['getProduct']);

    await TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      providers: [
        { provide: ProductService, useValue: productServiceSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () =>  1 } } } }
      ]
    })
    .compileComponents();

    productService = TestBed.inject(ProductService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    productService.getProduct.and.returnValue(of({
      id: 1,
      name: 'Producto 1',
      price: 100,
      description: 'Descripción del producto 1',
      photoUrl: 'http://example.com/product1.jpg'
    }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Agregar más pruebas aquí
});
