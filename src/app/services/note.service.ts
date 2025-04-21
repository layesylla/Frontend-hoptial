import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NoteMedicale } from '../pages/notes/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: NoteMedicale[] = [];

  getNotes(): Observable<NoteMedicale[]> {
    return of(this.notes);
  }

  getNote(id: number): Observable<NoteMedicale | undefined> {
    return of(this.notes.find(n => n.id === id));
  }

  addNote(note: NoteMedicale): Observable<NoteMedicale> {
    note.id = this.notes.length + 1;
    this.notes.push(note);
    return of(note);
  }

  updateNote(id: number, updated: NoteMedicale): Observable<NoteMedicale> {
    const index = this.notes.findIndex(n => n.id === id);
    if (index !== -1) this.notes[index] = { ...updated, id };
    return of(updated);
  }

  deleteNote(id: number): Observable<void> {
    this.notes = this.notes.filter(n => n.id !== id);
    return of();
  }
}
