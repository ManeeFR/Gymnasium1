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
    // iniciado!: boolean;


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

            // this.userExists = true;


            // resp.forEach((currentUser: any) => {

            //     if (currentUser.email === user.email) {

            //         // INDICAR CON UN PEQUEÑO TEXTO ROJO QUE YA HAY UN USUARIO REGISTRADO CON ESE EMAIL
            //         return;

            //     }

            // });

            // AQUÍ HAY QUE HACER UNA CONSULTA SQL A LA BD DONDE INSERTEMOS EL USUARIO
            // this.http.put("http://localhost:8000/api/usuarios", user).subscribe((resp: any) => {

            //     console.log("resp");
            //     console.log(resp);

            //     this.setCredentials(user);

            // });

            if (resp.resp != "success") {
                this.userExists = true;
            } else {
              this.userExists = false;
              this.router.navigateByUrl('login');
            }

        });




        // return '/login';

    }

    //     // Cuando esté lista la BD habrá que rehacer este método para que quede como éste:
    //     // saveUser(user: User): Observable<Object> {

    //     //     const headers = new HttpHeaders().set("X-Auth", "userId");

    //     //     return this.http.put(`/api/users/${user.id}`, user, { headers } );

    //     // }


    setToken(token: string) {

        this.cookies.set("token", token);

    }

    getToken() {

        return this.cookies.get("token");

    }

    public get UserEmailSessionStorage() : string {

        return sessionStorage.getItem("email")!;

    }

    public get UserPasswordSessionStorage() : string {

        return sessionStorage.getItem("password")!;

    }

    public set UserSessionStorage(user: any) {

        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("password", user.password);

    }


    setCredentials(user: any) {

        this.http.get("http://localhost:8000/api/usuarios").subscribe((resp: any) => {

            resp.forEach((currentUser: any) => {

                if (currentUser.email === user.email) {

                    this.setToken(currentUser.remember_token);

                    this.UserSessionStorage = user;

                    this.userLogged = true;

                    this.router.navigateByUrl('/home/clases');

                }

            });

        });

    }

}
