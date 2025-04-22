import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// Modèle TypeScript pour une chambre
export interface Chambre {
  id?: number;
  numero: string;
  litDisponible: number;
}

@Injectable({
  providedIn: 'root'  // Service fourni au niveau racine
})
export class ChambreService {
  private apiUrl = `${environment.apiUrl}/chambres`;

  // Injection classique via le constructeur
  constructor(private http: HttpClient) {}

  getChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(this.apiUrl);
  }

  getChambre(id: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.apiUrl}/${id}`);
  }

  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(this.apiUrl, chambre);
  }

  updateChambre(id: number, chambre: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(`${this.apiUrl}/${id}`, chambre);
  }

  deleteChambre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
