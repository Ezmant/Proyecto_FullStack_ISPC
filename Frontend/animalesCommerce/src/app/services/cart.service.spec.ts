import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShoppingCartService } from './cart.service';
import { Product } from '../../product';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShoppingCartService]
    });
    service = TestBed.inject(ShoppingCartService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Puedes agregar más pruebas aquí
});
