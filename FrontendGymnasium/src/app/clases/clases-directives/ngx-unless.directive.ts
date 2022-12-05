import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appNgxUnless]'
})

export class NgxUnlessDirective {

    display: boolean = false;

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
        
        // console.log("templateRef");
        // console.log(templateRef);

        // console.log("viewContainer");
        // console.log(viewContainer);

    }
    
    
    @Input()
    set appNgxUnless(condition: boolean) {

        if (!condition && !this.display) {

            this.viewContainer.createEmbeddedView(this.templateRef);
            this.display = true;

        } else if (condition && this.display) {

            this.viewContainer.clear();
            this.display = false;
            
        }
    }

}


