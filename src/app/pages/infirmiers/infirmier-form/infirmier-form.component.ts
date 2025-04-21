import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfirmierService, Infirmier } from 'src/app/services/infirmier.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-infirmier-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './infirmier-form.component.html'
})
export class InfirmierFormComponent implements OnInit {
  infirmier: Infirmier = { nom: '' };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: InfirmierService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.service.get(+id).subscribe(i => (this.infirmier = i));
    }
  }

  onSubmit() {
    if (this.isEdit) {
      this.service.update(this.infirmier).subscribe(() => this.router.navigate(['/infirmiers']));
    } else {
      this.service.add(this.infirmier).subscribe(() => this.router.navigate(['/infirmiers']));
    }
  }
}
