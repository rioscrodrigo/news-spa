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
      console.log(data);
      this.favoriteList = data;
      this.favoriteList.forEach((favorite) => {
        this.favoriteIdList.push(favorite.id);
      });
    });
  }

  postFavorite(userId: number, newsId: number): any {
    console.log('button pressed:');
    this.newsService.postFavorite(userId, newsId).subscribe();
  }
}
