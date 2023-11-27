import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private readonly API_URL ="http://localhost:8080/api/manga";
  

  constructor(private http: HttpClient) { }

  getManga(): Observable<any>{
    const header = {
      headers: this.getAuthHeader(),
    };

    return this.http.get<any>(`${this.API_URL}`, header);
  }

  getMangaById(id: number): Observable<any>{
    const header = {
      headers: this.getAuthHeader(),
    };
    return this.http.get<any>(`${this.API_URL}/${id}`, header);

  }

  addManga(body: any): Observable<any>{
    const header = {
      headers: this.getAuthHeader(),
    };
    return this.http.post<any>(`${this.API_URL}`, body, header);

  }

  editManga(id: number, body:any): Observable<any>{
    const header = {
      headers: this.getAuthHeader(),
    };
    return this.http.put<any>(`${this.API_URL}/${id}`, body ,header);
  }

  deleteManga(id: number): Observable<any>{
    const header = {
      headers: this.getAuthHeader(),
    };
      return this.http.delete<any>(`${this.API_URL}/${id}`, header);
    }

    private getAuthHeader(): HttpHeaders {
      // Get the token from the local storage
      const token: string | null = localStorage.getItem("authToken");
      if (token === null) {
        throw null;
      }
      return new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
}
