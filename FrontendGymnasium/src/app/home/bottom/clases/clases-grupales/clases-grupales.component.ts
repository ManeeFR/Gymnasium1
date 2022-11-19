import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clases } from '../clases-layout/clases-layout.interface';

@Component({
    selector: 'app-clases-grupales',
    templateUrl: './clases-grupales.component.html',
    styleUrls: ['./clases-grupales.component.scss']
})

export class ClasesGrupalesComponent {

    titulo: string = 'Clases grupales';

    datos!: Clases;

    private _jsonURL = '../../../../../assets/data/clases.json';

    constructor(private http: HttpClient) {

        this.getJSON().subscribe(data => {
            this.datos = data;
        });

    }

    get Data(): Clases {
        return this.datos;
    }

    public getJSON(): Observable<any> {
        return this.http.get(this._jsonURL);
    }

}


