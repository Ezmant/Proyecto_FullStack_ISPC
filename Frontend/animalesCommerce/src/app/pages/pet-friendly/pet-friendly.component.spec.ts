import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFriendlyComponent } from './pet-friendly.component';

describe('PetFriendlyComponent', () => {
  let component: PetFriendlyComponent;
  let fixture: ComponentFixture<PetFriendlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetFriendlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetFriendlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
