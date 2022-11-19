import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';

import { EurosPipe } from './shared/pipes/euros.pipe';
import { SaludoPipe } from './shared/pipes/saludo.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    RouterModule
  ],
  exports: [
    EurosPipe,
    SaludoPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
