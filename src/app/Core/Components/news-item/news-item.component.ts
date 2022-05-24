import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralServicesService } from '../../Services/general-services.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  constructor(private _GeneralServicesService:GeneralServicesService, private _ActivatedRoute:ActivatedRoute) { }

  cardID:any;
  cardContent:any;

  ngOnInit(): void {
    this.cardID =  Number(this._ActivatedRoute.snapshot.params['id']) -1;
    this.getNewsItem(this.cardID);
  }

  getNewsItem(cardID:any) {
    this._GeneralServicesService.getNewsItem(cardID).subscribe((response) => {
      console.log('News card: ', cardID, response);
      this.cardContent = response;
    })
  }

}
