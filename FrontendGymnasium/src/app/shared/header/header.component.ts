import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

    constructor(private ruta: Router, private authService: AuthService) {

    }

    logout() {
      this.authService.logout();
      this.ruta.navigate([""]);
    }

}
