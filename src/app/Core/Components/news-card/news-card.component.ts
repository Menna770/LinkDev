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
  newsCategory:any= [];
  isLiked:boolean = false;
  ShowSocialMedial:boolean = false;

  constructor(private _GeneralServicesService:GeneralServicesService,
              @Inject(DOCUMENT) private document: Document,
              private _Renderer:Renderer2) { }

  ngOnInit(): void {
    this.getNewsCategory();
  }
  

  getNewsCategory() {
    this._GeneralServicesService.getNewsCategory().subscribe((response) => {
      this.newsCategory = response.newsCategory;
    })
  };

  ToggleLikeNews() {
    this.isLiked = !this.isLiked;
  };

  ToggleSocialMediaBox(e:any) {
    this.ShowSocialMedial = !this.ShowSocialMedial;
  }

  GetCategoryName(CategoryId:any){
    this.categoryName = this.newsCategory.find((category:any) => category.id == CategoryId )
    return this.categoryName?.name;
  }

}
