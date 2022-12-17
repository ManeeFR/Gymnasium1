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

        if (authService.userLogged && authService.getToken()) {

            this.logged = true;
            this.ruta.navigate(["home/clases"]);

        } else {

            this.logged = false;

            // if (this.authService.iniciado) {

            //     // this.ruta.navigate(["login"]);

            // } else {

            //     // this.ruta.navigate([""]);

            // }

        }

    }


    logueado(): boolean {

        if (this.authService.userLogged && this.authService.getToken()) {
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
