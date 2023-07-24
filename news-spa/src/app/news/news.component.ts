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
  constructor(private newsService: NewsService) {
    this.newsList = [];
  }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data: News[]) => {
      console.log(data);
      this.newsList = data;
    });
  }
}
