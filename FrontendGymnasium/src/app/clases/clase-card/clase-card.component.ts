import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, Attribute, ChangeDetectionStrategy } from '@angular/core';
import { Clase } from '../model/clase.interface';

@Component({
    selector: 'app-clase-card',
    templateUrl: './clase-card.component.html',
    styleUrls: ['./clase-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ClaseCardComponent {

    @Input() clase!: Clase;

    @Input() cardIndex!: number;

    @Input() noImage!: TemplateRef<ElementRef>;

    // @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

    @Output('claseChanged') claseEditEmitter = new EventEmitter<Clase>();
    
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

        

        if (this.clase.category === this.categories[0]) 
            return 'beginner';
        
        if (this.clase.category === this.categories[1]) 
            return 'intermediate';
        
        if (this.clase.category === this.categories[2]) 
            return 'advanced';
        
        return 'all-levels';
    }


    onClaseViewed(): void {

    //     this.courseEmitter.emit(this.course);

        console.log(this.clase);
    }


    isImageVisible(clase: Clase): boolean {
        if (clase && clase.iconUrl)
            return true;
        return false;
    }


    onDescriptionChange(newDescription: string): void {
        this.clase.description = newDescription;
    }


    onSaveClicked(description: string): void {
        this.claseEditEmitter.emit({...this.clase, description});
    }


}
