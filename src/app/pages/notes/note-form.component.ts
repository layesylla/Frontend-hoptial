import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteMedicale } from './note.model';
import { NoteService } from 'src/app/services/note.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-form.component.html'
})
export class NoteFormComponent implements OnInit {
  note: NoteMedicale = { patientId: 0, contenu: '', date: '' };
  isEditMode = false;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.noteService.getNote(+id).subscribe(n => {
        if (n) this.note = n;
      });
    }
  }

  onSubmit() {
    if (this.isEditMode && this.note.id) {
      this.noteService.updateNote(this.note.id, this.note).subscribe(() => {
        alert('Note mise à jour');
        this.router.navigate(['/notes']);
      });
    } else {
      this.noteService.addNote(this.note).subscribe(() => {
        alert('Note ajoutée');
        this.router.navigate(['/notes']);
      });
    }
  }
}
