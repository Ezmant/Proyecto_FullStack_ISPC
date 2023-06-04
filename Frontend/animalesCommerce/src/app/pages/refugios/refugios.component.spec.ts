import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugiosComponent } from './refugios.component';

describe('RefugiosComponent', () => {
  let component: RefugiosComponent;
  let fixture: ComponentFixture<RefugiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefugiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefugiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
