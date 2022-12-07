import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'home-dashboard-layout',
    templateUrl: './home-dashboard.component.html',
    styleUrls: ['./home-dashboard.component.scss']
})

export class HomeDashboardComponent {

    //   constructor(private ruta: Router) {
    // this.ruta.navigate(["home"]);
    //   }

    constructor(public authService: AuthService, private router: Router) { }

    ngOnInit() {

        if (this.authService.userLogged && this.authService.getToken() !== undefined) {

            this.router.navigate(["/home/clases"]);

        } else {

            this.router.navigate(["login"]);
            // this.router.navigateByUrl('/login');

        }

        // this.getUserLogged();
    }

    // getUserLogged() {

    //     this.authService.getUserAPI(2).subscribe((user: any) => {

    //         console.log(user);

    //     });

    // }

}

