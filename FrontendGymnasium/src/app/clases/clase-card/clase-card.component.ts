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


    @Output('claseChanged') claseEditEmitter = new EventEmitter<Clase>();





    constructor(@Attribute('type') private type: string) {

    }


    onClaseViewed(): void {

        console.log(this.clase);
    }


    isImageVisible(clase: Clase): boolean {
        if (clase && clase.imagen)
            return true;
        return false;
    }


    onTitleChange(newTitle: string): void {
        this.clase.deporte = newTitle;
    }


    onSaveClicked(deporte: string): void {
        this.claseEditEmitter.emit({...this.clase, deporte});
    }


}
