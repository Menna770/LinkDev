import { Component, Input, OnInit } from '@angular/core';
import { GeneralServicesService } from './../../Services/general-services.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() newsCard:any;
  categoryID:any;
  newsCategory:any= [];

  constructor(private _GeneralServicesService:GeneralServicesService) { }

  ngOnInit(): void {
    this.getNewsCategory();

    this.categoryID = this.newsCategory.find((el:any) => el.id == this.newsCard.categoryID)
    console.log(this.categoryID)
  }

  getNewsCategory() {
    this._GeneralServicesService.getNewsCategory().subscribe((response) => {
      this.newsCategory = response.newsCategory;
    })
  };

}
