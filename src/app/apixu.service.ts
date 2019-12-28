import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  private APP_ID = '1c74f509a9ed4a129c89594b479c57e5';
  private SERVER_URL = 'https://api.openweathermap.org/data/2.5/weather?APPID=' + this.APP_ID + '&units=metric&q=';

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(this.SERVER_URL + location).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: No weather information available for this location.`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
