import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
    providedIn: "root"
})

export class AuthService {

    userLogged: boolean = false;

    token: string = "ey78fFGEf3h783rBF378RFBF7G3H73TRGfdh2osph8d2783fg378d";

    constructor(private http: HttpClient, private cookies: CookieService) { }

    login(user: any): Observable<any> {

        console.log('user');
        console.log(user);

        const tokenAPI: any = this.http.post("https://reqres.in/api/login", user);
        
        const usersAPI: any = this.http.post("https://reqres.in/api/users", user);
        
        console.log('usersAPI');
        console.log(usersAPI);

        if (tokenAPI && usersAPI) {

            this.setToken(this.token);
        
            this.UserSessionStorage = user;

            this.userLogged = true;
        }

        return tokenAPI;

    }

    register(user: any): Observable<any> {
        
        let userAPI: any[] = [];
        let usersAPI: any[] = [];
        let tokenAPI: any[] = [];

        this.http.post("https://reqres.in/api/user", user).subscribe((data: any) => {
            userAPI = data;
            console.log('userAPI');
            console.log(userAPI);
        });

        this.http.post("https://reqres.in/api/users", user).subscribe((data: any) => {
            usersAPI = data;
            console.log('usersAPI');
            console.log(usersAPI);
        });
        this.http.post("https://reqres.in/api/login", user).subscribe((data: any) => {
            tokenAPI = data;
            console.log('tokenAPI');
            console.log(tokenAPI);
        });


        // let aux: any[] = [...userAPI];
        // userAPI = [...aux];
        // let aux2: any[] = [...usersAPI];
        // usersAPI = [...aux2];
        // let aux3: any[] = [...tokenAPI];
        // tokenAPI = [...aux3];

        console.log('userAPI');
        console.log(userAPI);
        console.log('usersAPI');
        console.log(usersAPI);
        console.log('tokenAPI');
        console.log(tokenAPI);

        
        if (userAPI && usersAPI && tokenAPI) {

            console.log('tokenAPI');
            console.log(tokenAPI);

            console.log('user');
            console.log(user);

            this.UserSessionStorage = user;
            this.setToken(this.token);
        
        }

        console.log('adios');

        console.log('usersAPI');
        console.log(usersAPI);

        console.log('userAPI');
        console.log(userAPI);


        return this.http.post("https://reqres.in/api/users", user);

        // Cuando esté lista la BD habrá que rehacer este método para que quede como éste:
        // saveUser(user: User): Observable<Object> {

        //     const headers = new HttpHeaders().set("X-Auth", "userId");
    
        //     return this.http.put(`/api/users/${user.id}`, user, { headers } );
            
        // }

    }

    setToken(token: string) {

        console.log('token');
        console.log(token);

        if (token !== undefined && token !== '') {

            this.userLogged = true;
            
            this.cookies.set("token", token);
            
        }

    }

    getToken() {

        console.log('this.cookies.get("token")');
        console.log(this.cookies.get("token"));

        return this.cookies.get("token");

    }

    public get UserEmailSessionStorage() : string {

        return sessionStorage.getItem("userEmail")!;

    }
    
    public set UserSessionStorage(user: any) {

        sessionStorage.setItem("userEmail", user.email);
        sessionStorage.setItem("userPassword", user.password);

    }

    getUserAPI(id: number) {

        return this.http.get("https://reqres.in/api/users/" + id);

    }

    getAllUsersAPI() {

        return this.http.get("https://reqres.in/api/users/");

    }

    getUserLogged(currentUser: any) {

        // Aquí iría el endpoint para devolver el usuario para un token, 
        // pero esta API no contiene token

        // return this.http.get("https://reqres.in/api/users/" + this.getToken());

        const users = this.getAllUsersAPI();

        users.forEach((user: any) => {
            if (user.email === currentUser) {

            }
        });
        
        // return this.http.get("https://reqres.in/api/users/" + this.getToken());

        return this.http.get("https://reqres.in/api/users/" + currentUser.id);

    }

}
