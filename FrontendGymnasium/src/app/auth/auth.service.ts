import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
    providedIn: "root"
})

export class AuthService {

    userLogged: boolean = false;

    constructor(private http: HttpClient, private cookies: CookieService) { }

    login(user: any): Observable<any> {

        return this.http.post("https://reqres.in/api/login", user);

    }

    register(user: any): Observable<any> {

        return this.http.post("https://reqres.in/api/user", user);

        // Cuando esté lista la BD habrá que rehacer este método para que quede como éste:
        // saveUser(user: User): Observable<Object> {

        //     const headers = new HttpHeaders().set("X-Auth", "userId");
    
        //     return this.http.put(`/api/users/${user.id}`, user, { headers } );
            
        // }

    }

    setToken(token: string) {

        this.userLogged = true;
        this.cookies.set("token", token);

    }

    getToken() {

        return this.cookies.get("token");

    }

    getUser(id: number) {

        return this.http.get("https://reqres.in/api/users/" + id);

    }

    getAllUsers() {

        return this.http.get("https://reqres.in/api/users/");

    }

    getUserLogged(currentUser: any) {

        // Aquí iría el endpoint para devolver el usuario para un token, 
        // pero esta API no contiene token

        // return this.http.get("https://reqres.in/api/users/" + this.getToken());

        const users = this.getAllUsers();

        users.forEach((user: any) => {
            if (user.email === currentUser) {

            }
        });
        
        // return this.http.get("https://reqres.in/api/users/" + this.getToken());

        return this.http.get("https://reqres.in/api/users/" + currentUser.id);

    }

}
