import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Options, Request, cities, types } from '../data/data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  providers:[AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aero-app';
  request : Request = {type:"",location:"",date:""};
  private api = inject(AppService);
  protected citiesOptions : Options[] = [];
  protected typeOptions : Options[] = [];
  protected response : Response[] = [];
  protected result = true;

  ngOnInit() 
  {
    this.citiesOptions = cities;
    this.typeOptions = types;
    this.request.location ="Istanbul, Turkey";
    this.request.type ="C";
    this.request.date = new Date().toISOString().split('T')[0];

    this.api.getData().subscribe((response) => {
      this.response = response; 
      console.log(this.response);
    });
  }

  getWeather()
  {
    console.log(this.request);
  }

}
