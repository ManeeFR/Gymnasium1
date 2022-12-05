import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, Attribute, ChangeDetectionStrategy } from '@angular/core';
import { Clase } from '../model/clase.interface';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseCardComponent {

    @Input() course!: Clase;

    @Input() cardIndex!: number;

    @Input() noImage!: TemplateRef<ElementRef>;

    // @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

    @Output('courseChanged') courseEditEmitter = new EventEmitter<Clase>();
    
    // @Output('descriptionChanged') descriptionEditEmitter = new EventEmitter<Course>();
    
    // @ViewChild('courseDescription') courseDescription: ElementRef;

    categories: string[] = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'];


    
    constructor(@Attribute('type') private type: string) {

    }


    // ngOnChanges(simpleChange : SimpleChanges){
    //     console.log(simpleChange)
    // }

    // ngAfterViewInit() {
    //     // console.log("Course nº " + this.cardIndex + ": " + this.coursesService);
    //     // this.courseDescription = this.courseDescriptionInput.value;

    // }
    

    classesForCards(): string {

        

        if (this.course.category === this.categories[0]) 
            return 'beginner';
        
        if (this.course.category === this.categories[1]) 
            return 'intermediate';
        
        if (this.course.category === this.categories[2]) 
            return 'advanced';
        
        return 'all-levels';
    }


    onCourseViewed(): void {

    //     this.courseEmitter.emit(this.course);

        console.log(this.course);
    }


    isImageVisible(course: Clase): boolean {
        if (course && course.iconUrl)
            return true;
        return false;
    }


    onDescriptionChange(newDescription: string): void {
        this.course.description = newDescription;
    }


    onSaveClicked(description: string): void {
        this.courseEditEmitter.emit({...this.course, description});
    }


}
