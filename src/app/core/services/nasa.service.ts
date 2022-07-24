import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetMarsPhotos } from '../interfaces/mars.interfaces';

@Injectable({
  providedIn: 'root',
})

export class NasaService {

  private api_key = '4S9lM0cupM6u3O0jrawU7e9tM3qiUSQy90ER6Nqa';
  private SERVICE_URL = `https://api.nasa.gov/planetary/apod?api_key=${this.api_key}`;
  httpOptions: any;

  constructor(private http: HttpClient) {}

  apod(): Observable<any> {
    let serviceUrl = this.SERVICE_URL;
    return this.http.get(serviceUrl, this.httpOptions);
  }

  getMarsRoverPhotos(): Observable<any> {
    let serviceUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${this.api_key}`;
    return this.http.get(serviceUrl, this.httpOptions);
  }

  private generateRequestParams(param: any) {
    this.httpOptions = {
      header: new HttpHeaders(),
      params: param,
    };
  }
}
