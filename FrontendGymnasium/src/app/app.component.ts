import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'FrontendGymnasium';
//   usuarios = [];

//   constructor(private authService: AuthService){

//   }
//   ngOnInit(): void {

//     this.authService.getUser().subscribe((data: any) => {
//       console.log(data);
//       this.usuarios = data;
//     })

//   }
  
}
