import { GeneralServicesService } from './../../Services/general-services.service';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Category } from './../../Interfaces/category.interface';
import { News } from '../../Interfaces/news.interface';


@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})
export class NewsListingComponent implements OnInit {

  constructor(private _GeneralServicesService:GeneralServicesService, 
              private _Renderer:Renderer2,
              @Inject(DOCUMENT) private document: Document) { }

  categoryId:number = 0;
  newsCategory:Category[]= [];
  News:News[] = [];

  ngOnInit(): void {
    this.getNewsCategory(); 
    this.getNewsListing();
  };

  //Function that calls a function in general service to get news categories:
  getNewsCategory() {
    this._GeneralServicesService.getNewsCategory().subscribe((response) => {
      this.newsCategory = response.newsCategory;
      console.log( this.newsCategory)
    })
  };

  //Function to get category ID and toggle active class:
  getCategoryID(id:number, e:any) {
    this.categoryId = id;

    //Toggle active class:
    let activeDivs = this.document.getElementsByClassName('category-select');
    let activeArray = [].slice.call(activeDivs);
    for(let i = 0; i < activeArray.length; i++) {
      let element:any = activeArray[i];
      this._Renderer.removeClass(element, 'active');
    }
    this._Renderer.addClass(e.target , 'active');
  };

  //Function to sort the news array by their publish date:
  sortNewssByDate = (array:any) => {
    const sortMethod = (a:any, b:any) => {
       return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
    }
    array.sort(sortMethod);
  };

  //Function that calls a function in general service to get all news listing:
  getNewsListing() {
    this._GeneralServicesService.getNewsListing().subscribe((response) => {
      this.News = response.News;
      this.sortNewssByDate(this.News);
      console.log(this.News)
    })
  };

  //Function to reset categoryId to view all news:
  ViewAllNews() {
    this.categoryId = 0;
  };
}
