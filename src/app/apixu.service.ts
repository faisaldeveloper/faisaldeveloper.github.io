import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=58afee57a319740a6af2cd1015c4edad&query=' + location
    );
}
}
