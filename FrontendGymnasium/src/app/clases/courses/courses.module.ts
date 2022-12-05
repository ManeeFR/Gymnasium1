import { ClasesModule } from './../clases.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CourseImageComponent } from '../course-image/course-image.component';
import { CoursesService } from './courses.service';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    // CourseImageComponent,
    // CourseCardComponent,
    // HighlightedDirective, // It's already declared at app.module
    NgxUnlessDirective
  ],
  imports: [
    CommonModule, // Contains directives such as ngIf or ngFor
    HttpClientModule
  ],
  exports: [
    // CourseCardComponent,
    // CourseImageComponent
  ],
  providers: [CoursesService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesModule { }
