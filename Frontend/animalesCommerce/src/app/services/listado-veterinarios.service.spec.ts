import { TestBed } from '@angular/core/testing';

import { ListadoVeterinariosService } from './listado-veterinarios.service';

describe('ListadoVeterinariosService', () => {
  let service: ListadoVeterinariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoVeterinariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
