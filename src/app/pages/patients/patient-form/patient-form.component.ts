import { Component, OnInit } from '@angular/core';
import { PatientService, Patient } from 'src/app/services/patient.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './patient-form.component.html'
})
export class PatientFormComponent implements OnInit {
  patient: Patient = { nom: '', prenom: '', email: '' };
  isEditMode = false;

  constructor(
    private service: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.service.getPatient(+id).subscribe(data => this.patient = data);
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.service.updatePatient(this.patient).subscribe(() => {
        this.router.navigate(['/patients']);
      }, error => console.error(error));
    } else {
      this.service.addPatient(this.patient).subscribe(() => {
        this.router.navigate(['/patients']);
      }, error => console.error(error));
    }
  }
}
