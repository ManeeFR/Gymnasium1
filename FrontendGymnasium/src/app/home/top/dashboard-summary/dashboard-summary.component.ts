import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TopInterface } from './../top.interface';

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.scss']
})


export class DashboardSummaryComponent {

    fecha: Date = new Date();

    datos!: TopInterface;

    nombre: string = "Manuel";

    private _jsonURL = '../../../assets/data/top.json';

    constructor(private http: HttpClient) {
        
        this.getJSON().subscribe(data => {
            this.datos = data;
        });
        
    }

    get Data(): TopInterface {
        return this.datos;
    }

    public getJSON(): Observable<any> {
        return this.http.get(this._jsonURL);
    }

}
