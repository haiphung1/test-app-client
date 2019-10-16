import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  public getAllProject() {
    return this.http.get<any[]>(`${this.apiUrl}/projects`);
  }
  
}
