import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';

import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WeatherComponent } from './weather/weather.component';
import { ApixuService } from './apixu.service';

import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,

    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
     },
     {
         path: 'abt-cmp',
         component: AboutComponent
      },
     {
         path: 'weather-cmp',
         component: WeatherComponent
      }
   ])
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
