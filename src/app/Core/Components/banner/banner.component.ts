import { Banner } from './../../Interfaces/banner.interface';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { GeneralServicesService } from '../../Services/general-services.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banners:Banner[] = []

  constructor(private _GeneralServicesService:GeneralServicesService,
              @Inject(DOCUMENT) private document: Document,
              private renderer:Renderer2) { }

  ngOnInit(): void {
    this.getBannerSlides();
  }

  //Function that call function in general service to get all banners:
  getBannerSlides() {
    this._GeneralServicesService.getBannerSlides().subscribe((response:Banner[]) => {
      this.banners = response;
    })
  }

}
