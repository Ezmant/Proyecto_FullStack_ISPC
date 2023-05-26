import { TestBed } from '@angular/core/testing';

import { ListaAdopcionService } from './lista-adopcion.service';

describe('ListaAdopcionService', () => {
  let service: ListaAdopcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaAdopcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
