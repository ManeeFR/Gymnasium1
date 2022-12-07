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
    // passwordError!: boolean;


    constructor(public authService: AuthService, public router: Router) { }

    register() {

        this.authService.register({ email: this.email, password: this.password }).subscribe((x: any) => {
            
            this.router.navigateByUrl('/home/clases');

        });

    }

    login() {

        this.router.navigateByUrl('/login');

    }

}
