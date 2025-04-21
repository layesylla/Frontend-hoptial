import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { RendezVous } from 'src/app/services/rendezvous.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rendezvous-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rendezvous-list.component.html'
})
export class RendezvousListComponent implements OnInit {
  rendezvousList: RendezVous[] = [];

  constructor(private rendezvousService: RendezvousService) {}

  ngOnInit(): void {
    this.loadRendezvous();
  }

  loadRendezvous() {
    this.rendezvousService.getRendezVous().subscribe(data => {
      this.rendezvousList = data;
    });
  }

  deleteRendezvous(id: number) {
    if (confirm('Supprimer ce rendez-vous ?')) {
      this.rendezvousService.delete(id).subscribe(() => this.loadRendezvous());
    }
  }
}
