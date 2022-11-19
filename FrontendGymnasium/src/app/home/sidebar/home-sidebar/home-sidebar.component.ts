import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SidebarInterface } from './home-sidebar.interface';

@Component({
    selector: 'app-home-sidebar',
    templateUrl: './home-sidebar.component.html',
    styleUrls: ['./home-sidebar.component.scss']
})

export class HomeSidebarComponent {

    fecha = new Date().getDate();
    datos!: SidebarInterface;

    private _jsonURL = '../../../assets/data/sidebar.json';

    constructor(private http: HttpClient) {
        
        this.getJSON().subscribe(data => {
            this.datos = data;
        });
        
    }

    get Data(): SidebarInterface {

        return this.datos;
    }

    public getJSON(): Observable<any> {
        return this.http.get(this._jsonURL);
    }

}
