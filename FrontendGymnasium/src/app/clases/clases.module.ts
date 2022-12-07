import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HighlightedDirective } from './clases-directives/highlighted.directive';
import { ClaseTitleComponent } from './clase-title/clase-title.component';
import { ClasesDashboardLayoutComponent } from './clases-layout/clases-dashboard-layout.component';
import { AppComponent } from '../app.component';
import { ClaseCardComponent } from './clase-card/clase-card.component';
import { ClaseImageComponent } from './clase-image/clase-image.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { BottomModule } from '../home/bottom/bottom.module';
import { ClasesRoutingModule } from './clases-routing.module';
import { RouterModule } from '@angular/router';
import { ClasesComponent } from './clases.component';
import { HomeModule } from '../home/home.module';
import { ClasesService } from './clases-service/clases.service';

@NgModule({
    declarations: [
        HighlightedDirective,
        ClaseTitleComponent,
        ClasesDashboardLayoutComponent,
        ClaseCardComponent,
        ClaseImageComponent,
        ClasesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CommonModule,
        RouterModule,
        SharedModule,
        AppRoutingModule,
        BottomModule,
        ClasesRoutingModule,
        RouterModule,
        HomeModule
    ],
    providers: [ClasesService],
    bootstrap: [AppComponent],
    entryComponents: [ClaseTitleComponent]
})
export class ClasesModule { }
