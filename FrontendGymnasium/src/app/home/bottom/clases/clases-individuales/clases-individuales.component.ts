import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clases } from '../clases-layout/clases-layout.interface';

@Component({
    selector: 'app-clases-individuales',
    templateUrl: './clases-individuales.component.html',
    styleUrls: ['./clases-individuales.component.scss'],
})

export class ClasesIndividualesComponent {

    titulo: string = 'Clases individuales';
    layout: string = 'flex';
    imagen: string = '../../../../../assets/icons/flexMode.png';
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

    cambiaLayout() {
        if (this.layout == 'flex') {
            this.layout = 'grid';
            this.imagen = '../../../../../assets/icons/gridMode.png';
        } else {
            this.layout = 'flex';
            this.imagen = '../../../../../assets/icons/flexMode.png';
        }
    }

}

