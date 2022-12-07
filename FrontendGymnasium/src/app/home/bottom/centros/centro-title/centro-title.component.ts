import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-centro-title',
    templateUrl: './centro-title.component.html',
    styleUrls: ['./centro-title.component.scss']
})
export class CentroTitleComponent {

    @Input() title!: string;

}
