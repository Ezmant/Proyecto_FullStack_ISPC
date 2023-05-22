import { Component, OnInit } from '@angular/core';
import { AdoptionService } from '../../services/adoption.service';
import { Adoption } from '../../adoption';

@Component({
  selector: 'app-adoption-follow-up',
  templateUrl: './adoption-follow-up.component.html',
  styleUrls: ['./adoption-follow-up.component.css']
})
export class AdoptionFollowUpComponent implements OnInit {
  adoptions: Adoption[] = [];

  constructor(private adoptionService: AdoptionService) { }

  ngOnInit() {
    this.getAdoptions();
  }

  getAdoptions(): void {
    this.adoptionService.getAdoptions()
      .subscribe(adoptions => this.adoptions = adoptions);
  }
}
