import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})

export class RegisterComponent {

    email!: string;
    password!: string;
    confirmPassword!: string;
    passwordError!: boolean;

    token: string = "ey67FG7849WSWENF49498CH894320F3JCSOF039T8C9WCH"; 


    constructor(public authService: AuthService, public router: Router) { }

    register() {

        const user = { email: this.email, password: this.password };

        this.authService.register(user).subscribe(data => {

            this.authService.setToken(this.token);

            this.router.navigateByUrl('/home/clases');

        });

    }

    login() {

        this.router.navigateByUrl('/login');

    }

}
