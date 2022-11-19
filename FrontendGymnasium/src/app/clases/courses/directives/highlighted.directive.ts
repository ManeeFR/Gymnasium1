import { Directive, HostBinding, HostListener, Input, Output, EventEmitter, Host } from '@angular/core';
import { CoursesService } from '../courses.service';

@Directive({
    selector: '[appHighlighted]',
    exportAs: 'hl',
    // providers: [CoursesService]
})

export class HighlightedDirective {

    @Input('appHighlighted') display: boolean = false;

    @Input('activateToggle') activateToggle?: boolean = true;

    @Output() toggle = new EventEmitter;


    // constructor(@Host() private coursesService: CoursesService) { 
    constructor(private coursesService: CoursesService) { 
        // console.log('Service instantiated for highlighted with id: ' + this.coursesService.id);
    }


    // @HostBinding('className')
    // get cssClasses() {

    //     return "highlighted";

    // }


    // @HostBinding('style.border')
    // get cssStyles() {

    //     return "1px solid red";

    // }


    // Another way to do it:

    // To modify an HTML attribute instead of a DOM property:

    // @HostBinding('attr.disabled')
    // get disabled() {

    //     return "true";
    // }


    @HostBinding('class.highlighted')
    get cssClasses() {
        return this.display;
    }


    @HostListener('mouseover', ['$event'])
    mouseOver($event: MouseEvent) {

        // console.log($event);

        if (this.activateToggle) {

            // this.display = true;
            this.doToggle();
            
            this.toggle.emit(this.display);

        }

    }
    
    @HostListener('mouseout')
    mouseOut() {
        
        if (this.activateToggle) {

            // this.display = false;
            this.doToggle();

            this.toggle.emit(this.display);

        }

    }


    doToggle() {
        this.display = !this.display;
    }

}
