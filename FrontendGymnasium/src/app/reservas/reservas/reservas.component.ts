import { AfterContentChecked, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent {




  constructor(private ruta: Router, private authService: AuthService) {

    if (this.authService.UserEmailSessionStorage && this.authService.getToken() !== undefined) {

      console.log("entra23");

      this.ruta.navigate(["/reservas"]);

    } else {

      console.log("no entra23");
      console.log(this.authService.userLogged);
      console.log(this.authService.getToken());
      this.ruta.navigate(["/login"]);

    }

  }



}
