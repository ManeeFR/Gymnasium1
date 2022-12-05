import { Component, Input } from '@angular/core';

@Component({
    selector: 'clase-title',
    templateUrl: './clase-title.component.html',
    styleUrls: ['./clase-title.component.scss']
})
export class ClaseTitleComponent {

    @Input() title!: string;

}
