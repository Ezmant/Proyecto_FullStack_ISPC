import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarAdopcionComponent } from './finalizar-adopcion.component';

describe('FinalizarAdopcionComponent', () => {
  let component: FinalizarAdopcionComponent;
  let fixture: ComponentFixture<FinalizarAdopcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizarAdopcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizarAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
