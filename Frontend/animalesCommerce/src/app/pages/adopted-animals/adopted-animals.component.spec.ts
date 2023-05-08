import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdoptedAnimalsComponent, AdoptedAnimal } from './adopted-animals.component';

describe('AdoptedAnimalsComponent', () => {
  let component: AdoptedAnimalsComponent;
  let fixture: ComponentFixture<AdoptedAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdoptedAnimalsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptedAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display adopted animals list', () => {
    const adoptedAnimals: AdoptedAnimal[] = [
      {
        id: 1,
        name: 'Animal 1',
        animalType: 'Dog',
        size: 'Medium',
        breed: 'Labrador Retriever',
        adoptionDate: new Date('2023-05-01'),
      },
      {
        id: 2,
        name: 'Animal 2',
        animalType: 'Cat',
        size: 'Small',
        breed: 'Siamese',
        adoptionDate: new Date('2023-04-20'),
      },
    ];
    component.adoptedAnimals = adoptedAnimals;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toEqual(adoptedAnimals.length);

    for (let i = 0; i < rows.length; i++) {
      const animal = adoptedAnimals[i];
      const cells = rows[i].querySelectorAll('td');
      expect(cells[0].textContent).toContain(animal.name);
      expect(cells[1].textContent).toContain(animal.animalType);
      expect(cells[2].textContent).toContain(animal.size);
      expect(cells[3].textContent).toContain(animal.breed);
      expect(cells[4].textContent).toContain(animal.adoptionDate.toISOString().slice(0, 10));
    }
  });
});
