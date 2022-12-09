import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';

@Injectable({
    providedIn: "root"
})

export class AuthService {

    userLogged: boolean = false;


    constructor(private http: HttpClient, private router: Router, private cookies: CookieService) { }


    login(user: any): void {

        this.http.get("http://localhost:8000/api/usuarios").subscribe((resp: any) => {

            resp.forEach((currentUser: any) => {

                if (currentUser.email === user.email && currentUser.password === user.password) {

                    this.setCredentials(currentUser);

                }

            });

        });

    }


    register(user: any): void {

        this.http.post("http://localhost:8000/api/usuarios", user).subscribe((resp: any) => {

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

        });

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

    public set UserSessionStorage(user: any) {

        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("password", user.password);

    }

    getUserAPI(id: number) {

        return this.http.get("https://reqres.in/api/users/" + id);

    }

    getAllUsersAPI() {

        return this.http.get("https://reqres.in/api/users/");

    }

    // getUserLogged(currentUser: any) {

    //     const users = this.getAllUsersAPI();

    //     console.log('users');
    //     console.log(users);

    //     users.forEach((user: any) => {
    //         if (user.email === currentUser) {

    //         }
    //     });

    //     return this.http.get("https://reqres.in/api/users/" + currentUser.id);

    // }

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
