import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-course-image',
    templateUrl: './course-image.component.html',
    styleUrls: ['./course-image.component.scss']
})

export class CourseImageComponent {

    @Input() src!: string | undefined;



}
