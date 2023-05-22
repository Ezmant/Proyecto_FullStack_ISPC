import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariosComponent } from './veterinarios.component';

describe('VeterinariosComponent', () => {
  let component: VeterinariosComponent;
  let fixture: ComponentFixture<VeterinariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
