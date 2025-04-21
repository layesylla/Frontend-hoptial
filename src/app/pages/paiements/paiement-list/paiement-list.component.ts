import { Component, OnInit } from '@angular/core';
import { PaiementService, Paiement } from 'src/app/services/paiement.service';
import { Router,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paiement-list',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './paiement-list.component.html'
})
export class PaiementListComponent implements OnInit {
  paiements: Paiement[] = [];

  constructor(private service: PaiementService, public router: Router) {}

  ngOnInit(): void {
    this.loadPaiements();
  }

  loadPaiements(): void {
    this.service.getPaiements().subscribe(data => this.paiements = data);
  }

  deletePaiement(id: number) {
    if (confirm('Supprimer ce paiement ?')) {
      this.service.deletePaiement(id).subscribe(() => this.loadPaiements());
    }
  }
}
