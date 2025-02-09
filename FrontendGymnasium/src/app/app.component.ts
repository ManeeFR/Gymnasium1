import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "./auth/auth.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    title: string = 'Gymnasium';

    logged: boolean = false;

    constructor(private ruta: Router, private authService: AuthService) {

        if (this.authService.UserEmailSessionStorage && this.authService.getToken()) {

            this.logged = true;
            // this.ruta.navigate(["home/clases"]);

        } else {

            this.logged = false;

        }

    }


    logueado(): boolean {

        if (this.authService.UserEmailSessionStorage && this.authService.getToken()) {
            this.logged = true;

            return true;
        } else {
            this.logged = false;
            return false;
        }





    }

    bgImage(): boolean {
        return this.logged;
    }

}
