import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private readonly API_URL ="http://localhost:8080/api/anime";

  constructor(private http: HttpClient) { }

  getAllAnime(): Observable<any>{
      const header = {
      headers: this.getAuthHeader(),
    };
    return this.http.get<any>(`${this.API_URL}`, header);
  }

  getAnimeById(id: number): Observable<any>{
      const header = {
      headers: this.getAuthHeader(),
    };
    return this.http.get<any>(`${this.API_URL}/${id}`, header);

  }

  addAnime(newAnime: any): Observable<any>{
      const header = {
      headers: this.getAuthHeader(),
    };
    return this.http.post<any>(`${this.API_URL}`, newAnime, header);
  }

  editAnime(id: any, newAnime:any): Observable<any>{
            const header = {
      headers: this.getAuthHeader(),
    };
    return this.http.put<any>(`${this.API_URL}/${id}`, newAnime, header);

  }

  deleteAnime(id: any): Observable<any>{
            const header = {
      headers: this.getAuthHeader(),
    };
      return this.http.delete<any>(`${this.API_URL}/${id}`, header);
    }
        private getAuthHeader(): HttpHeaders {
      const token: string | null = localStorage.getItem("authToken");
      if (token === null) {
        throw null;
      }
      return new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  
}
