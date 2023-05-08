import { Component, OnInit } from '@angular/core';

export interface AdoptedAnimal {
  id: number;
  name: string;
  animalType: string;
  size: string;
  breed: string;
  adoptionDate: Date;
}

@Component({
  selector: 'app-adopted-animals',
  templateUrl: './adopted-animals.component.html',
  styleUrls: ['./adopted-animals.component.css']
})
export class AdoptedAnimalsComponent implements OnInit {
  adoptedAnimals: AdoptedAnimal[] = [];

  constructor() { }

  ngOnInit(): void {
    // Aquí vamos a cargar los datos de los animales adoptados (por ejemplo, desde un servicio o una API)
    this.loadAdoptedAnimals();
  }

  loadAdoptedAnimals(): void {
    // Por ejemplo, en este primer paso, vamos a cargar los datos de los animales adoptados de esta manera.
    // Es decir, por ahora, utilizaremos datos de ejemplo.
    this.adoptedAnimals = [
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
  }
}


