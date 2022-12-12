import { Component, Input, OnInit } from '@angular/core';
import { Clase } from 'src/app/clases/model/clase.interface';

@Component({
    selector: 'app-listado-clases',
    templateUrl: './listado-clases.component.html',
    styleUrls: ['./listado-clases.component.scss']
})

export class ListadoClasesComponent implements OnInit {

    @Input() clase!: Clase;


    constructor() { }

    ngOnInit(): void {
    }

}
