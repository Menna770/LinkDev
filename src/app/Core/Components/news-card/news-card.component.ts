import { Category } from './../../Interfaces/category.interface';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { GeneralServicesService } from './../../Services/general-services.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() newsCard:any;
  categoryName:any;
  newsCategory:Category[] = [];
  isLiked:boolean = false;
  ShowSocialMedialBox:boolean = false;

  constructor(private _GeneralServicesService:GeneralServicesService,
              @Inject(DOCUMENT) private document: Document,
              private _Renderer:Renderer2) { }

  ngOnInit(): void {
    this.getNewsCategory();
  }
  
  //Function to get all news categories:
  getNewsCategory() {
    this._GeneralServicesService.getNewsCategory().subscribe((response) => {
      this.newsCategory = response.newsCategory;
    })
  };

  //Like & Dislike news item:
  ToggleLikeNews() {
    this.isLiked = !this.isLiked;
  };

  //Social Media Box of news item:
  ToggleSocialMediaBox(e:any) {
    this.ShowSocialMedialBox = !this.ShowSocialMedialBox;
  }

  //Function to get each news item's Category Name:
  GetCategoryName(CategoryId:any){
    this.categoryName = this.newsCategory.find((category:any) => category.id == CategoryId )
    return this.categoryName?.name;
  }

}
