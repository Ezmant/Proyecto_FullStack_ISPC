import { TestBed } from '@angular/core/testing';

import { RefugiosService } from './refugios.service';

describe('RefugiosService', () => {
  let service: RefugiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefugiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
