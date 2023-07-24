import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private baseUrl = 'http://localhost:8080/api/news/space-flight';
  private favoriteUrl = 'http://localhost:8080/api/users/';
  private api = '/news-favorite/';

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.baseUrl}`);
  }

  getFavorites(userId: number): Observable<News[]> {
    return this.http.get<News[]>(`${this.favoriteUrl}${userId}${this.api}`);
  }

  postFavorite(userId: number, newsId: number) {
    return this.http.post(`${this.favoriteUrl}${userId}${this.api}${newsId}`, {
      body: {},
    });
  }

  deleteFavorite(userId: number, newsId: number) {
    return this.http.delete(
      `${this.favoriteUrl}${userId}${this.api}${newsId}`,
      {
        body: {},
      }
    );
  }
}
