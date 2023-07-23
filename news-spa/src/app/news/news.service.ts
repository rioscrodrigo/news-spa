import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private baseUrl = 'http://localhost:8080/api/news/space-flight';

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.baseUrl}`);
  }
}
