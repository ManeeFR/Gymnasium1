import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    title = 'Gymnasium';

    constructor(private ruta: Router) {

        this.ruta.navigate(["home/clases"]);
    }


}
