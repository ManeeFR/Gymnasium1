import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// shared
import { SharedModule } from '../shared/shared.module';

// tablero:
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

// top:
import { DashboardWelcomeComponent } from './top/dashboard-welcome/dashboard-welcome.component';
import { DashboardFavoritesComponent } from './top/dashboard-favorites/dashboard-favorites.component';
import { DashboardSummaryComponent } from './top/dashboard-summary/dashboard-summary.component';

// menu:
import { NavigationMenuComponent } from './menu/navigation-menu/navigation-menu.component';

// sidebar:
import { HomeSidebarComponent } from './sidebar/home-sidebar/home-sidebar.component';

// bottom: 
import { HomeDashboardComponent } from './home-dashboard.component';
import { BottomLayoutComponent } from './bottom/bottom-layout/bottom-layout.component';
import { BottomModule } from './bottom/bottom.module';
import { HomeRoutingModule } from './home-routing.module';




@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardWelcomeComponent,
    DashboardFavoritesComponent,
    DashboardSummaryComponent,
    HomeSidebarComponent,
    NavigationMenuComponent,
    BottomLayoutComponent,
    HomeDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    BottomModule,
    HomeRoutingModule,
    RouterModule
  ],
  exports: [
    DashboardWelcomeComponent,
    DashboardFavoritesComponent,
    DashboardSummaryComponent,
    HomeSidebarComponent,
    NavigationMenuComponent,
    HomeDashboardComponent,
    // BottomLayoutComponent,
    AppRoutingModule
  ]
})
export class HomeModule { }
