import { TestBed } from '@angular/core/testing';

import { AgradecimientosService } from './agradecimientos.service';

describe('AgradecimientosService', () => {
  let service: AgradecimientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgradecimientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
