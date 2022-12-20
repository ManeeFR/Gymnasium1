import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, Attribute, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Clase } from '../model/clase.interface';

@Component({
    selector: 'app-clase-card',
    templateUrl: './clase-card.component.html',
    styleUrls: ['./clase-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ClaseCardComponent implements OnInit {

    @Input() clase!: Clase;

    @Input() cardIndex!: number;

    @Input() noImage!: TemplateRef<ElementRef>;


    @Output('claseChanged') claseEditEmitter = new EventEmitter<Clase>();

    idCard!: string;




  ngOnInit(): void {
    this.idCard = "show-menu" + this.cardIndex;

    console.log(this.cardIndex);
    console.log(this.idCard);
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
