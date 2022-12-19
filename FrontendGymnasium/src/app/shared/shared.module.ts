import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EurosPipe } from './pipes/euros.pipe';
import { SaludoPipe } from './pipes/saludo.pipe';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EurosPipe,
    SaludoPipe,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    EurosPipe,
    SaludoPipe
  ]
})
export class SharedModule { }
