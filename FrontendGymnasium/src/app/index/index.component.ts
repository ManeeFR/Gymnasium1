import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(public router: Router, public authService: AuthService) {

    if (this.authService.UserEmailSessionStorage && this.authService.getToken() !== undefined) {

      console.log("entra");

      this.router.navigate(["/home/clases"]);

    } else {

        console.log("no entra");
        this.router.navigate(["/"]);

    }


   }

  ngOnInit(): void {
  }

}
