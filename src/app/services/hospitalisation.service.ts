import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hospitalisation } from './hospitalisation.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HospitalisationService {
  private apiUrl = `${environment.apiUrl}/hospitalisations`; // À adapter si besoin

  constructor(private http: HttpClient) {}

  getHospitalisations(): Observable<Hospitalisation[]> {
    return this.http.get<Hospitalisation[]>(this.apiUrl);
  }

  getHospitalisation(id: number): Observable<Hospitalisation> {
    return this.http.get<Hospitalisation>(`${this.apiUrl}/${id}`);
  }

  addHospitalisation(h: Hospitalisation): Observable<any> {
    return this.http.post(this.apiUrl, h);
  }

  updateHospitalisation(id: number, h: Hospitalisation): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, h);
  }

  deleteHospitalisation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
