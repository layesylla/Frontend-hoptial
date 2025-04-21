import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HospitalisationService } from 'src/app/services/hospitalisation.service';
import { Hospitalisation } from 'src/app/services/hospitalisation.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hospitalisation-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './hospitalisation-list.component.html'
})
export class HospitalisationListComponent implements OnInit {
  hospitalisations: Hospitalisation[] = [];

  constructor(
    private service: HospitalisationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadHospitalisations();
  }

  loadHospitalisations(): void {
    this.service.getHospitalisations().subscribe(data => {
      this.hospitalisations = data;
    });
  }

  deleteHospitalisation(id: number) {
    if (confirm('Supprimer cette hospitalisation ?')) {
      this.service.deleteHospitalisation(id).subscribe(() => this.loadHospitalisations());
    }
  }
}
