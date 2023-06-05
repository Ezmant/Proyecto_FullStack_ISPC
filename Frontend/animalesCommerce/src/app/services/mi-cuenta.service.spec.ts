import { TestBed } from '@angular/core/testing';

import { MiCuentaService } from './mi-cuenta.service';

describe('MiCuentaService', () => {
  let service: MiCuentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiCuentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
