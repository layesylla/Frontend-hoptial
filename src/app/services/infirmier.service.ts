import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Infirmier {
  id?: number;
  nom: string;
}

@Injectable({ providedIn: 'root' })
export class InfirmierService {
  private apiUrl = `${environment.apiUrl}/infirmiers`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Infirmier[]> {
    return this.http.get<Infirmier[]>(this.apiUrl);
  }

  get(id: number): Observable<Infirmier> {
    return this.http.get<Infirmier>(`${this.apiUrl}/${id}`);
  }

  add(i: Infirmier): Observable<any> {
    return this.http.post(this.apiUrl, i);
  }

  update(i: Infirmier): Observable<any> {
    return this.http.put(`${this.apiUrl}/${i.id}`, i);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
