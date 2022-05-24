import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/Components/navbar/navbar.component';
import { FooterComponent } from './Core/Components/footer/footer.component';
import { BannerComponent } from './Core/Components/banner/banner.component';
import { ThingsWeDoComponent } from './Core/Components/things-we-do/things-we-do.component';
import { NewsListingComponent } from './Core/Components/news-listing/news-listing.component';
import { NewsCardComponent } from './Core/Components/news-card/news-card.component';
import { NewsItemComponent } from './Core/Components/news-item/news-item.component';
import { HomePageComponent } from './Core/Components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    ThingsWeDoComponent,
    NewsListingComponent,
    NewsCardComponent,
    NewsItemComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
