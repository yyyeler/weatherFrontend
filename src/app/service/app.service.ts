import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseData, Request, Response } from '../../data/data';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  url : string = "http://localhost:8080/api/weather/";

  constructor(private http: HttpClient) {}

  getData( request : Request ): Observable<BaseData> {
    let urlGet : string = this.url; 
    urlGet += request.location+"/"+request.type;
    return this.http.get<any>(urlGet);
  }
}