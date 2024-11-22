import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Options, Request, cities, types, BaseData } from '../data/data';
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
  protected baseData : BaseData = new BaseData();;
  protected result = true;
  protected sign : string = "";
  protected days : string[] =[]
 
  ngOnInit() 
  {
    this.citiesOptions = cities;
    this.typeOptions = types;
    this.request.location ="Istanbul, Turkey";
    this.request.type ="Celsius";
    this.days = this.createDateRange();
  }

  getWeather()
  {
    this.api.getData(this.request).subscribe((response) => {
      this.baseData = response; 
      console.log(response);
      this.baseData.days.forEach(x =>{
         x.temp     = Math.round(x.temp);
         x.tempmin  = Math.round(x.tempmin);
         x.tempmax  = Math.round(x.tempmax);
      });
      this.sign = (this.request.type === "Celcius"?"\u2109":"\u2103");
    });
  }

  createDateRange() {
    const today = new Date();
    const range = [];

    for (let i = -7; i <= 7; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i); 
        const day = String(date.getDate()).padStart(2, '0'); 
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        range.push(`${day}/${month}`); 
    }

    return range;
}
}
