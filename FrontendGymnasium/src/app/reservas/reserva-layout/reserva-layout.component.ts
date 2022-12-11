import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReservaService } from '../reserva-service/reserva.service';
import { Reserva } from '../reserva-model/reserva.interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
    selector: 'app-reserva-layout',
    templateUrl: './reserva-layout.component.html',
    styleUrls: ['./reserva-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        ReservaService
    ],

})


export class ReservaLayoutComponent implements OnInit {

    reservasList!: Reserva[];


    constructor(private reservaService: ReservaService,
                private authService: AuthService,
                private ruta: Router) {
    }




    ngOnInit(): void {

        this.reservaService.loadReservas().subscribe((reservas: any) => {
            this.reservasList = reservas;
        });

        let aux = this.reservasList;
        this.reservasList = [...aux];

        if (this.authService.userLogged && this.authService.getToken() !== undefined) {

            console.log("entra");

            this.ruta.navigate(["/reservas"]);

        } else {

            console.log("no entra");

            this.ruta.navigate(["/login"]);

        }

    }

    onReservaEdited(reserva: Reserva): void {

        this.reservaService.saveReserva(reserva).subscribe();

    }


    reservas(): Reserva[] {

        return this.reservasList;

    }

    validReserva(reserva: Reserva): boolean {

        return true;

    }


    concreteStyles(url: string) {

        return { 'background-image': 'url(' + url + ')',
                 'background-size': 'cover',
                 'background-repeat': 'round'
               };

    }


}
