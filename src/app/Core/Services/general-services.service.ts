import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralServicesService {

  constructor(private _HttpClient: HttpClient) { }

  categoryId:number = 0;
  newsItemId:any;

  //Base API URL
  baseURL: string = "http://localhost:3000/";

  //Function to get all banners from banner.json (Please run it locally before running the project)
  getBannerSlides():Observable<any> {
    return this._HttpClient.get(this.baseURL + 'slides');
  }

  //Function to get News Category from API:
  getNewsCategory():Observable<any> {
    return this._HttpClient.get("https://api.npoint.io/91298d970c27e9a06518");
  }

  //Function to get News Listing from API:
  getNewsListing():Observable<any> {
    return this._HttpClient.get("https://api.npoint.io/d275425a434e02acf2f7");
  }

  //Function to get each new item data:
  getNewsItem(id:any):Observable<any> {
    return this._HttpClient.get(`https://api.npoint.io/d275425a434e02acf2f7/News/${id}`);
  }
  
}
