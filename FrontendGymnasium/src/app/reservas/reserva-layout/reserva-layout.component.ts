import { AfterContentChecked, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva-model/reserva.interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ReservaService } from '../reserva-service/reserva.service';
import { ClasesService } from '../../clases/clases-service/clases.service';
import { Clase } from 'src/app/clases/model/clase.interface';



@Component({
    selector: 'app-reserva-layout',
    templateUrl: './reserva-layout.component.html',
    styleUrls: ['./reserva-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        ReservaService,
        ClasesService
    ],

})


export class ReservaLayoutComponent implements OnInit, AfterContentChecked {

    currentDay: number = new Date().getDate();
    tieneReservasHoy!: boolean;
    showReservasAll!: boolean;
    showReservasUser!: boolean;

    reservasList!: Reserva[];
    reservasListAll!: Reserva[];
    clasesList!: Clase[];



    constructor(private reservaService: ReservaService,
                private claseService: ClasesService,
                private authService: AuthService,
                private ruta: Router) {
    }

    ngAfterContentChecked(): void {
        let aux = this.clasesList;
        this.clasesList = [...aux];
        let aux1 = this.reservasList;
        this.reservasList = [...aux1];
    }


    ngOnInit(): void {

        this.reservaService.loadReservas().subscribe((reservas: any) => {
            this.reservasList = reservas;
        });


        this.claseService.loadClases().subscribe((clases: any) => {
            this.clasesList = clases;
        });


        if (this.authService.userLogged && this.authService.getToken() !== undefined) {

            console.log("entra");

            this.ruta.navigate(["/reservas"]);

        } else {

            console.log("no entra");

            this.ruta.navigate(["/login"]);

        }

        this.showReservasUser = true;
        this.showReservasAll = false;

    }

    onReservaEdited(reserva: Reserva): void {

        this.reservaService.saveReserva(reserva).subscribe();
    }


    reservas(): Reserva[] {

        return this.reservasList;
    }

    reservasAll(): Reserva[] {

        this.reservaService.loadReservasAll().subscribe((reservas: any) => {
            this.reservasListAll = reservas;
        });

        return this.reservasListAll;
    }


    tieneReservaHoy(): boolean {

        return this.reservasList.some(reserva => reserva.fecha.toString() === new Date().toISOString().split('T')[0] );
    }


    validReserva(reserva: Reserva): boolean {

        const date = new Date(reserva.fecha).getDate();

        if (date !== this.currentDay) {
            this.currentDay = date;
            return true;
        }

        return false;
    }

    showReservas() {

        this.showReservasUser = false;
        this.showReservasAll = true;

    }

    onClaseEdited(clase: Clase): void {

        this.claseService.saveClase(clase).subscribe();
    }


    clases(): Clase[] {

        return this.clasesList;
    }

    validClase(clase: Clase): boolean {

        return true;
    }


    concreteStyles(url: string) {

        return { 'background-image': 'url(' + url + ')',
                 'background-size': 'cover',
                 'background-repeat': 'round'
               };
    }

}
