import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-centro-image',
    templateUrl: './centro-image.component.html',
    styleUrls: ['./centro-image.component.scss']
})

export class CentroImageComponent {

    @Input() src!: string | undefined;



}
