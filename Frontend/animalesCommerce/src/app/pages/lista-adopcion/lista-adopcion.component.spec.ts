import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdopcionComponent } from './lista-adopcion.component';

describe('ListaAdopcionComponent', () => {
  let component: ListaAdopcionComponent;
  let fixture: ComponentFixture<ListaAdopcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAdopcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
