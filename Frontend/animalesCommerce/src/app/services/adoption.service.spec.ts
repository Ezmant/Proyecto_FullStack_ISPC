import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdoptionService } from './adoption.service';
import { Adoption } from '../adoption';

describe('AdoptionService', () => {
  let service: AdoptionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdoptionService]
    });
    service = TestBed.inject(AdoptionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch adoptions from API', () => {
    const dummyAdoptions: Adoption[] = [
      { id: 1, productId: 1, adoptionDate: '2023-05-01', followUpDate: '2023-05-08' },
      { id: 2, productId: 2, adoptionDate: '2023-05-02', followUpDate: '2023-05-09' },
    ];

    service.getAdoptions().subscribe(adoptions => {
      expect(adoptions.length).toBe(2);
      expect(adoptions).toEqual(dummyAdoptions);
    });

    const request = httpMock.expectOne(service.apiUrl);
    expect(request.request.method).toBe('GET');
    request.flush(dummyAdoptions);
  });
});
