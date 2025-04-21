import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RendezVous } from './rendezvous.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  private apiUrl = `${environment.apiUrl}/rendezvous`;

  constructor(private http: HttpClient) {}

  getRendezVous(): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(this.apiUrl);
  }

  getById(id: number): Observable<RendezVous> {
    return this.http.get<RendezVous>(`${this.apiUrl}/${id}`);
  }

  create(rendezvous: RendezVous): Observable<any> {
    return this.http.post(this.apiUrl, rendezvous);
  }

  update(id: number, rendezvous: RendezVous): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, rendezvous);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
