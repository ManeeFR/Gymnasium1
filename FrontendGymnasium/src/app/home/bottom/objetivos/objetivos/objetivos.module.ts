import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../../../app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ObjetivosComponent } from './objetivos.component';
// import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ObjetivosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
    // RouterModule
  ],
  exports: [
    ObjetivosComponent
  ]
})
export class ObjetivosModule { }
