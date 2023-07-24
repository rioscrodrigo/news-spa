import { Component, OnInit } from '@angular/core';
import { News } from './news';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['../app.component.scss'],
})
export class NewsComponent implements OnInit {
  newsList: News[];
  favoriteList: News[];
  favoriteIdList: number[];
  constructor(private newsService: NewsService) {
    this.newsList = [];
    this.favoriteList = [];
    this.favoriteIdList = [];
  }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data: News[]) => {
      this.newsList = data;
    });

    this.newsService.getFavorites(1).subscribe((data: News[]) => {
      this.favoriteList = data;
      this.favoriteList.forEach((favorite) => {
        this.favoriteIdList.push(favorite.id);
      });
    });
  }

  postFavorite(userId: number, newsId: number): any {
    this.newsService.postFavorite(userId, newsId).subscribe();
    this.favoriteIdList.push(newsId);
  }

  deleteFavorite(userId: number, newsId: number): any {
    this.newsService.deleteFavorite(userId, newsId).subscribe();
    const index: number = this.favoriteIdList.indexOf(newsId);
    this.favoriteIdList.splice(index, 1);
  }
}
