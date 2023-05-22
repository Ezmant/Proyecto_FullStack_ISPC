import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { of } from 'rxjs';
import { Product } from '../../../product';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
  let shoppingCartService: ShoppingCartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent ],
      providers: [ ShoppingCartService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    shoppingCartService = TestBed.inject(ShoppingCartService);

    spyOn(shoppingCartService, 'getProducts').and.returnValue(of<Product[]>([]));
    spyOn(shoppingCartService, 'getCart').and.returnValue(of<Product[]>([]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Puedes agregar más pruebas aquí
});

