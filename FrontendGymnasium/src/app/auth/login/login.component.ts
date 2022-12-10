import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';


@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

    email!: string;
    password!: string;


    constructor(public authService: AuthService, public router: Router) {

    }


    ngOnInit(): void {
        // this.authService.iniciado = true;
        this.authService.userLogged = false;
    }

    login() {

        this.authService.login({
            email: this.email,
            password: this.password
        });

    }


    register() {
        this.router.navigateByUrl('/register');
    }

    userIncorrect() {
        return this.authService.userIncorrect;
    }

}
