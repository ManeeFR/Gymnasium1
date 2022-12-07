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

        // let token = "";
        // this.http.post("https://reqres.in/api/login", user).subscribe((resp: any) => {
            
        //         token = resp.token;
                    
        // });
        
        this.http.get("http://localhost:8000/api/usuarios").subscribe((resp: any) => {
    
            resp.data.forEach((currentUser: any) => {

                if (currentUser.email === user.email && currentUser.password === user.password) {

                    this.setCredentials(user);
                    
                }

            });
            
        });
        // this.http.get("https://reqres.in/api/users").subscribe((resp: any) => {
    
        //     resp.data.forEach((currentUser: any) => {

        //         if (currentUser.email === user.email) {

        //             this.setCredentials(user);
                    
        //         }

        //     });
            
        // });


        return this.http.post("https://reqres.in/api/users", user);

    }


    register(user: any): Observable<any> {
        
        this.http.get("http://localhost:8000/api/usuarios").subscribe((resp: any) => {
    
            let repeated: boolean = false;

            resp.data.forEach((currentUser: any) => {

                if (currentUser.email === user.email) {

                    repeated = true;

                }

            });

            if (!repeated) {

                this.setCredentials(user);

            }

        });

        return this.http.post("https://reqres.in/api/users", user);

    }

    // register(user: any): Observable<any> {
        
    //     let userAPI: any[] = [];
    //     let usersAPI: any[] = [];
    //     let tokenAPI: any[] = [];

    //     this.http.post("https://reqres.in/api/user", user).subscribe((data: any) => {
    //         userAPI = data;
    //         console.log('userAPI');
    //         console.log(userAPI);
    //     });

    //     this.http.post("https://reqres.in/api/users", user).subscribe((data: any) => {
    //         usersAPI = data;
    //         console.log('usersAPI');
    //         console.log(usersAPI);
    //     });
    //     this.http.post("https://reqres.in/api/login", user).subscribe((data: any) => {
    //         tokenAPI = data;
    //         console.log('tokenAPI');
    //         console.log(tokenAPI);
    //     });

        
    //     if (userAPI && usersAPI && tokenAPI) {

    //         this.UserSessionStorage = user;
    //         this.setToken(this.token);
        
    //     }


    //     return this.http.post("https://reqres.in/api/users", user);

    //     // Cuando esté lista la BD habrá que rehacer este método para que quede como éste:
    //     // saveUser(user: User): Observable<Object> {

    //     //     const headers = new HttpHeaders().set("X-Auth", "userId");
    
    //     //     return this.http.put(`/api/users/${user.id}`, user, { headers } );
            
    //     // }

    // }

    
    setToken(token: string) {
        
        this.cookies.set("token", token);
        
    }

    getToken() {

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

        console.log('users');
        console.log(users);

        users.forEach((user: any) => {
            if (user.email === currentUser) {

            }
        });
        
        // return this.http.get("https://reqres.in/api/users/" + this.getToken());

        return this.http.get("https://reqres.in/api/users/" + currentUser.id);

    }

    setCredentials(user: any) {

        this.http.post("https://reqres.in/api/login", user).subscribe((resp: any) => {

            this.setToken(resp.token);
        
        });

        this.UserSessionStorage = user;
        
        this.userLogged = true;
        
    }

}
