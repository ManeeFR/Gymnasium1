import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { CookieService } from 'ngx-cookie-service';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';

import { EurosPipe } from './shared/pipes/euros.pipe';
import { SaludoPipe } from './shared/pipes/saludo.pipe';
import { RouterModule } from '@angular/router';
import { ClasesModule } from './clases/clases.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, IndexComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HomeModule,
    RouterModule,
    ClasesModule,
    RouterModule
  ],
  exports: [
    EurosPipe,
    SaludoPipe
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
