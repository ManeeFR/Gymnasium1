import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';


@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent {

    email!: string;
    password!: string;


    constructor(public authService: AuthService, public router: Router) { }

    login() {

        this.authService.login({
            email: this.email,
            password: this.password
        });

    }


    register() {
        this.router.navigateByUrl('/register');
    }

}
