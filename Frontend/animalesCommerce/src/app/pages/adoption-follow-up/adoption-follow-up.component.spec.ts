import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AdoptionFollowUpComponent } from './adoption-follow-up.component';
import { AdoptionService } from '../../services/adoption.service';

describe('AdoptionFollowUpComponent', () => {
  let component: AdoptionFollowUpComponent;
  let fixture: ComponentFixture<AdoptionFollowUpComponent>;
  let adoptionService: AdoptionService;

  beforeEach(async () => {
    const adoptionServiceSpy = jasmine.createSpyObj('AdoptionService', ['getAdoptions']);

    await TestBed.configureTestingModule({
      declarations: [ AdoptionFollowUpComponent ],
      providers: [ { provide: AdoptionService, useValue: adoptionServiceSpy } ]
    })
    .compileComponents();

    adoptionService = TestBed.inject(AdoptionService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionFollowUpComponent);
    component = fixture.componentInstance;
    adoptionService.getAdoptions.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests here
});
