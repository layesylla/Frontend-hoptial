import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { NoteMedicale } from './note.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-list.component.html'
})
export class NoteListComponent implements OnInit {
  notes: NoteMedicale[] = [];

  constructor(private noteService: NoteService, public router: Router) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.noteService.getNotes().subscribe(data => this.notes = data);
  }

  deleteNote(id: number): void {
    if (confirm('Supprimer cette note ?')) {
      this.noteService.deleteNote(id).subscribe(() => this.loadNotes());
    }
  }
}
