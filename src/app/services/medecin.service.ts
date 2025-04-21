import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Medecin {
  id?: number;
  nom: string;
  specialite: string;
}

@Injectable({ providedIn: 'root' })
export class MedecinService {
  private apiUrl = `${environment.apiUrl}/medecins`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(this.apiUrl);
  }

  get(id: number): Observable<Medecin> {
    return this.http.get<Medecin>(`${this.apiUrl}/${id}`);
  }

  add(med: Medecin): Observable<any> {
    return this.http.post(this.apiUrl, med);
  }

  update(med: Medecin): Observable<any> {
    return this.http.put(`${this.apiUrl}/${med.id}`, med);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
