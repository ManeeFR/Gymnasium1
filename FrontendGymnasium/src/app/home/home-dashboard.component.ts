import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'home-dashboard-layout',
    templateUrl: './home-dashboard.component.html',
    styleUrls: ['./home-dashboard.component.scss']
})

export class HomeDashboardComponent {


    constructor(public authService: AuthService, private router: Router) { }

    ngOnInit() {

        if (this.authService.UserEmailSessionStorage && this.authService.getToken() !== undefined) {

          console.log("entro");

          this.router.navigate(["/home/clases"]);

        } else {

          console.log("no entro");
          console.log(this.authService.userLogged);
          console.log(this.authService.getToken());
            this.router.navigate(["login"]);

        }

    }


}

