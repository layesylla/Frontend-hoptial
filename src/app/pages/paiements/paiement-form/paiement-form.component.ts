import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaiementService, Paiement } from 'src/app/services/paiement.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paiement-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './paiement-form.component.html'
})
export class PaiementFormComponent implements OnInit {
  paiement: Paiement = { montant: 0, moyen: '', patientId: 0 };
  isEditMode = false;

  constructor(
    private service: PaiementService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.service.getPaiement(+id).subscribe(p => (this.paiement = p));
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.service.updatePaiement(this.paiement.id!, this.paiement)
        .subscribe(() => this.router.navigate(['/paiements']));
    } else {
      this.service.addPaiement(this.paiement)
        .subscribe(() => this.router.navigate(['/paiements']));
    }
  }
}
