import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../data/data';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private jsonUrl = 'assets/mockData.json'; 

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<Response[]>(this.jsonUrl);
  }
}