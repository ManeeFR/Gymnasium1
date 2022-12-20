import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TopInterface } from './../top.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-dashboard-welcome',
    templateUrl: './dashboard-welcome.component.html',
    styleUrls: ['./dashboard-welcome.component.scss']
})

export class DashboardWelcomeComponent {

    fecha: Date = new Date();

    datos!: TopInterface;

    nombre!: string;

    private _jsonURL = '../../../assets/data/top.json';

    constructor(private http: HttpClient, private authService: AuthService) {

        this.getJSON().subscribe(data => {
            this.datos = data;
        });

        this.nombre = this.authService.UserNameSessionStorage;

    }

    get Data(): TopInterface {
        return this.datos;
    }

    public getJSON(): Observable<any> {
        return this.http.get(this._jsonURL);
    }

}

