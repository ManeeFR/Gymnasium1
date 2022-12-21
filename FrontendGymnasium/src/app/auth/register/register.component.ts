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
    nombre!: string;
    // passwordError!: boolean;


    constructor(public authService: AuthService, public router: Router) {

      if (this.authService.UserEmailSessionStorage && this.authService.getToken() !== undefined) {

        console.log("entra");

        this.router.navigate(["/home/centros"]);

      } else {

          console.log("no entra");
          this.router.navigate(["/register"]);

      }

     }

    register() {

        if (this.password === this.confirmPassword) {

            this.authService.register({
                email: this.email,
                password: this.password,
                nombre: this.nombre
            });


        } else {
            // INDICAR CON UN PEQUEÑO TEXTO ROJO QUE NO COINCIDEN LAS PASSWORDS
        }

        if (!this.authService.userExists) {
            // this.login();
        } else {
            this.router.navigateByUrl('register');
        }


    }

    login() {

        this.router.navigateByUrl('login');

    }

    userExists() {
        return this.authService.userExists;
    }

}
