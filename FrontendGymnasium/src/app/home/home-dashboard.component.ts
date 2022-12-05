import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
// import { Router } from '@angular/router';

@Component({
    selector: 'home-dashboard-layout',
    templateUrl: './home-dashboard.component.html',
    styleUrls: ['./home-dashboard.component.scss']
})

export class HomeDashboardComponent {

    //   constructor(private ruta: Router) {
    // this.ruta.navigate(["home"]);
    //   }

    constructor(public authService: AuthService) { }

    ngOnInit() {
        this.getUserLogged();
    }

    getUserLogged() {

        this.authService.getUser(2).subscribe((user: any) => {

            console.log(user);

        });

    }

}

