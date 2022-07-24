import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeNgModule } from './prime-ng/prime-ng/prime-ng.module';
import { HttpClientModule } from '@angular/common/http';

import { NasaService } from './core/services/nasa.service';

import { AppComponent } from './app.component';
import { LeiButtonComponent } from './components/atoms/lei-button/lei-button.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { EarthTemplateComponent } from './components/templates/earth-template/earth-template.component';
import { MarsTemplateComponent } from './components/templates/mars-template/mars-template.component';
import { MarsCardComponent } from './components/organisms/mars-card/mars-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LeiButtonComponent,
    HomePageComponent,
    EarthTemplateComponent,
    MarsTemplateComponent,
    MarsCardComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    HttpClientModule
  ],
  providers: [
    NasaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
