import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';

@Injectable({
    providedIn: "root"
})

export class AuthService implements OnInit {

    userLogged: boolean = false;
    userRegistered: boolean = false;
    userExists!: boolean;
    userIncorrect!: boolean;


    constructor(private http: HttpClient, private router: Router, private cookies: CookieService) { }

    ngOnInit(): void {
        this.userLogged = false;
        this.userRegistered = false;
        this.userIncorrect = false;
    }


    login(user: any): void {

        this.http.get("http://localhost:8000/api/usuarios").subscribe((resp: any) => {

            this.userIncorrect = true;

            resp.forEach((currentUser: any) => {

                if (currentUser.email === user.email && currentUser.password === user.password) {

                    this.userIncorrect = false;
                    this.setCredentials(currentUser);

                }

            });

        });

    }


    register(user: any): void {

        this.userExists = false;

        const headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*/*");

        this.http.post("http://localhost:8000/api/usuarios", user, { headers } ).subscribe((resp: any) => {

            this.userRegistered = true;

            if (resp.resp != "success") {
                this.userExists = true;
            } else {
              this.userExists = false;
              this.router.navigateByUrl('login');
            }

        });

    }



    setToken(token: string) {

        this.cookies.set("token", token, 1);

    }

    getToken() {

        return this.cookies.get("token");

    }

    public get UserEmailSessionStorage() : string {

        return sessionStorage.getItem("email")!;

    }

    public get UserNameSessionStorage() : string {

        return sessionStorage.getItem("nombre")!;

    }


    public set UserSessionStorage(user: any) {

        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("nombre", user.nombre);

    }


    setCredentials(user: any) {

        this.http.get("http://localhost:8000/api/usuarios").subscribe((resp: any) => {

            resp.forEach((currentUser: any) => {

                if (currentUser.email === user.email) {

                    this.setToken(currentUser.remember_token);

                    this.UserSessionStorage = user;

                    this.userLogged = true;

                    this.router.navigateByUrl('/home/centros');

                }

            });

        });

    }

    logout() {
      sessionStorage.clear();
      this.cookies.delete("token");
    }

}
