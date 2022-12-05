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

    token: string = "ey67FG7849WSWENF49498CH894320F3JCSOF039T8C9WCH"; 

    constructor(public authService: AuthService, public router: Router) { }

    login() {

        const user = { email: this.email, password: this.password };

        this.authService.login(user).subscribe(data => {

            console.log('data');
            console.log(data);

            // this.authService.setToken(data.token);

            this.router.navigateByUrl('/home/clases');

        });

    }

    register() {
        this.router.navigateByUrl('/register');
    }
}
