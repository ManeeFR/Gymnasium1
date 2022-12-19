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

      if (this.authService.UserEmailSessionStorage && this.authService.getToken() !== undefined) {

        console.log("entra");

        this.router.navigate(["/home/clases"]);

      } else {

          console.log("no entra");
          this.router.navigate(["/login"]);

      }

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
