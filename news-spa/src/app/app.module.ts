import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, NewsComponent, UsersComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
