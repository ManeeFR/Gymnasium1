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


    // visitPage(url: string) {
    //     this.router.navigate(['home/financiacion']);
    // }


    // goPlaces() {
    // this.router.navigate(['financiacion'])
    //     .then(nav => {
    //         console.log(nav); // true if navigation is successful
    //     }, err => {
    //         console.log(err) // when there's an error
    //     });
    // }


    // mostrarPagina(ruta: string) {

    //     // this.router.navigate([ruta]);

    //     this.router.navigate([]).then(result => { window.open(`/financiacion`); });

    // }

}