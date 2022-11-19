import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ClasesComponent } from './clases.component';

import { CoursesModule } from './courses/courses.module';
import { HighlightedDirective } from './courses/directives/highlighted.directive';
import { CourseTitleComponent } from './course-title/course-title.component';
// import { CourseCardComponent } from './courses/course-card/course-card.component';

@NgModule({
    declarations: [
        // CourseCardComponent,
        HighlightedDirective,
        CourseTitleComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoursesModule
    ],
    providers: [],
    bootstrap: [ClasesComponent],
    entryComponents: [CourseTitleComponent]
})
export class ClasesModule { }
