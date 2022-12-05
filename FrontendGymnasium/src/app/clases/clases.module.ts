import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HighlightedDirective } from './courses/directives/highlighted.directive';
import { CourseTitleComponent } from './course-title/course-title.component';
import { ClasesDashboardLayoutComponent } from './clases-layout/clases-dashboard-layout.component';
// import { CourseCardComponent } from './courses/course-card/course-card.component';
import { AppComponent } from '../app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { BottomModule } from '../home/bottom/bottom.module';
import { HomeRoutingModule } from './clases-routing.module';
import { RouterModule } from '@angular/router';
import { ClasesComponent } from './clases.component';
import { HomeModule } from '../home/home.module';

@NgModule({
    declarations: [
        // CourseCardComponent,
        HighlightedDirective,
        CourseTitleComponent,
        ClasesDashboardLayoutComponent,
        CourseCardComponent,
        CourseImageComponent,
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
        HomeRoutingModule,
        RouterModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [CourseTitleComponent]
})
export class ClasesModule { }
