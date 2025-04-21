import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { ChambreService, Chambre } from 'src/app/services/chambre.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chambre-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './chambre-list.component.html'
})
export class ChambreListComponent implements OnInit {
  chambres: Chambre[] = [];

  constructor(private service: ChambreService, public router: Router) {}

  ngOnInit(): void {
    this.service.getChambres().subscribe(data => this.chambres = data);
  }

  delete(id: number) {
    if (confirm('Supprimer cette chambre ?')) {
      this.service.deleteChambre(id).subscribe(() => this.ngOnInit());
    }
  }
}
