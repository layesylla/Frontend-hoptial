import { Component, OnInit } from '@angular/core';
import { PatientService, Patient } from 'src/app/services/patient.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './patient-list.component.html'
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  searchText = '';

  constructor(private service: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
    this.service.getPatients().subscribe(data => this.patients = data);
  }

  deletePatient(id: number) {
    if (confirm('Supprimer ce patient ?')) {
      this.service.deletePatient(id).subscribe(() => this.loadPatients());
    }
  }

  get filteredPatients() {
    return this.patients.filter(p =>
      (p.nom?.toLowerCase().includes(this.searchText.toLowerCase()) ||
       p.code?.toLowerCase().includes(this.searchText.toLowerCase()) ||
       p.numeroAssurance?.toLowerCase().includes(this.searchText.toLowerCase()) ||
       p.telephone?.toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }
}
