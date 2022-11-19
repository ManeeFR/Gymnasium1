import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../../../app-routing.module';

import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';

// import { BottomLayoutComponent } from './bottom-layout.component';



@NgModule({
  declarations: [
    // BottomLayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
    // RouterModule
  ],
  exports: [
    // BottomLayoutComponent
  ]
})
export class BottomLayoutModule { }
