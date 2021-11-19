import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChooseBarComponent } from './choose-bar/choose-bar.component';
import { MeteoCardComponent } from './meteo-card/meteo-card.component';
import { DayMeteoComponent } from './day-meteo/day-meteo.component';


@NgModule({
  declarations: [
    AppComponent,
    ChooseBarComponent,
    MeteoCardComponent,
    DayMeteoComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
