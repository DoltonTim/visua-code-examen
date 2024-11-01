import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facultad } from '../models/facultad'; // Adjust the path and filename as necessary

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  private apiUrl = 'http://localhost:8080/api/facultad';

  constructor(private http: HttpClient) {}

  // Fetch all facultades
  getFacultad(): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(this.apiUrl);
  }

  // Fetch facultad by ID
  getFacultadById(id: number): Observable<Facultad> {
    return this.http.get<Facultad>(`${this.apiUrl}/${id}`);
  }

  // Create a new facultad
  createFacultad(facultad: Facultad): Observable<Facultad> {
    return this.http.post<Facultad>(this.apiUrl, facultad);
  }

  // Update an existing facultad
  updateFacultad(facultad: Facultad): Observable<Facultad> {
    return this.http.put<Facultad>(`${this.apiUrl}/${facultad.id}`, facultad);
  }

  // Delete a facultad
  deleteFacultad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
