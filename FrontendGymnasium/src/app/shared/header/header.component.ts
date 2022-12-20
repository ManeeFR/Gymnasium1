import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  nombre!: string;


    constructor(private ruta: Router, private authService: AuthService) {

      this.nombre = this.authService.UserNameSessionStorage;

    }

    logout() {
      this.authService.logout();
      this.ruta.navigate([""]);
    }

}
