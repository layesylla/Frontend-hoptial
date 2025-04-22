import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambreService, Chambre } from 'src/app/services/chambre.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chambre-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chambre-form.component.html'
})
export class ChambreFormComponent implements OnInit {
  chambre: Chambre = {id :0, numero: '', litDisponible: 0 };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ChambreService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.service.getChambre(+id).subscribe(c => (this.chambre = c));
    }
  }

  onSubmit() {
    console.log(this.chambre,"chambre",this.isEdit);
    if (this.isEdit) {
      this.service.updateChambre(this.chambre.id!, this.chambre)
  .subscribe(() => this.router.navigate(['/chambres']));

    } else {
      this.service.addChambre(this.chambre).subscribe({next:(val)=>{console.log(val)},error:(val)=>{console.log(val)}});
    }
  }
}
