import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalisationService } from 'src/app/services/hospitalisation.service';
import { Hospitalisation } from 'src/app/services/hospitalisation.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hospitalisation-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hospitalisation-form.component.html'
})
export class HospitalisationFormComponent implements OnInit {
  hospitalisation: Hospitalisation = {
    patientId: 0,
    dateDebut: '',
    dateFin: '',
    traitement: ''
  };
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HospitalisationService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.service.getHospitalisation(+id).subscribe(data => this.hospitalisation = data);
    }
  }

  onSubmit() {
    if (this.isEditMode && this.hospitalisation.id) {
      this.service.updateHospitalisation(this.hospitalisation.id, this.hospitalisation)
        .subscribe(() => this.router.navigate(['/hospitalisations']));
    } else {
      this.service.addHospitalisation(this.hospitalisation)
        .subscribe(() => this.router.navigate(['/hospitalisations']));
    }
  }
}
