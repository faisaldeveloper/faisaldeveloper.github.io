import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherData: any;
  public image2: any;
  public weatherSearchForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues) {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => {
        this.weatherData = data;
        this.image2 = this.weatherData.current.weather_icons;
        console.log(this.weatherData);
        });
  }

}
