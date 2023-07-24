import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.scss'],
})
export class HeaderComponent implements OnInit {
  today: Date;
  constructor() {
    this.today = new Date();
  }
  ngOnInit(): void {}
}
