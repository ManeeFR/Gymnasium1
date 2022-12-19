import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MenuInterface } from './navigation-menu.interface';

@Component({
    selector: 'app-navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.scss']
})

export class NavigationMenuComponent {

    datos!: MenuInterface;

    private _jsonURL = '../../../assets/data/menu.json';

    constructor(private http: HttpClient, private router: Router) {

        this.getJSON().subscribe(data => {
            this.datos = data;
        });

    }

    get Data(): MenuInterface {
        return this.datos;
    }

    public getJSON(): Observable<any> {
        return this.http.get(this._jsonURL);
    }


}
