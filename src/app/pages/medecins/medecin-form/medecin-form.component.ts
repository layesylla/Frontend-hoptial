import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService, Medecin } from 'src/app/services/medecin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medecin-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medecin-form.component.html'
})
export class MedecinFormComponent implements OnInit {
  medecin: Medecin = { nom: '', specialite: '' };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MedecinService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.service.get(+id).subscribe(m => (this.medecin = m));
    }
  }

  onSubmit() {
    if (this.isEdit) {
      this.service.update(this.medecin).subscribe(() => this.router.navigate(['/medecins']));
    } else {
      this.service.add(this.medecin).subscribe(() => this.router.navigate(['/medecins']));
    }
  }
}
