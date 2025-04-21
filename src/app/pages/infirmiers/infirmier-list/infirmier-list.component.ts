import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfirmierService, Infirmier } from 'src/app/services/infirmier.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infirmier-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infirmier-list.component.html'
})
export class InfirmierListComponent implements OnInit {
  infirmiers: Infirmier[] = [];

  constructor(private service: InfirmierService, public router: Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.infirmiers = data);
  }

  delete(id: number) {
    if (confirm('Supprimer cet infirmier ?')) {
      this.service.delete(id).subscribe(() => this.ngOnInit());
    }
  }
}
