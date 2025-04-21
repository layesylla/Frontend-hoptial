import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { RendezVous } from 'src/app/services/rendezvous.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rendezvous-form',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './rendezvous-form.component.html'
})
export class RendezvousFormComponent implements OnInit {
  rendezvous: RendezVous = {
    patientId: 0,
    medecinId: 0,
    date: '',
    heure: '',
    motif: ''
  };

  isEditMode = false;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rdvService: RendezvousService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    if (this.id) {
      this.isEditMode = true;
      this.rdvService.getById(this.id).subscribe(data => this.rendezvous = data);
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.rdvService.update(this.id, this.rendezvous).subscribe(() => this.router.navigate(['/rendezvous']));
    } else {
      this.rdvService.create(this.rendezvous).subscribe(() => this.router.navigate(['/rendezvous']));
    }
  }
}
