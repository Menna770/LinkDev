import { GeneralServicesService } from './../../Services/general-services.service';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})
export class NewsListingComponent implements OnInit {

  constructor(private _GeneralServicesService:GeneralServicesService, 
              private _Renderer:Renderer2,
              @Inject(DOCUMENT) private document: Document) { }

  categoryId:number = 1;
  newsCategory:any= [];
  News:any = [];

  ngOnInit(): void {
    this.getNewsCategory(); 
    this.getNewsListing();
  };

  getNewsCategory() {
    this._GeneralServicesService.getNewsCategory().subscribe((response) => {
      this.newsCategory = response.newsCategory;
      console.log( this.newsCategory)
    })
  };

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

  getNewsListing() {
    this._GeneralServicesService.getNewsListing().subscribe((response) => {
      this.News = response.News;
      console.log( this.News)
    })
  };
}
