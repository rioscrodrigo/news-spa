import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { News } from './news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {
  news: News[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data: News[]) => {
      console.log(data);
      this.news = data;
    });
  }
}