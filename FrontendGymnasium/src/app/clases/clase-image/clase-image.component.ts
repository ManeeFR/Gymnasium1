import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-clase-image',
    templateUrl: './clase-image.component.html',
    styleUrls: ['./clase-image.component.scss']
})

export class ClaseImageComponent {

    @Input() src!: string | undefined;



}
