import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralServicesService {

  constructor(private _HttpClient: HttpClient) { }

  //Base API URL
  baseURL: string = "http://localhost:3000/";

  //Function to get all banners from banner.json (Please run it locally before running the project)
  getBannerSlides():Observable<any> {
    return this._HttpClient.get(this.baseURL + 'slides')
  }
}
