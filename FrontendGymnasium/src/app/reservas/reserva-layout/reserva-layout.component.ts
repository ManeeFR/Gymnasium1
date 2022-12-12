import { AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

    reservasList!: Reserva[];
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

    }

    onReservaEdited(reserva: Reserva): void {

        this.reservaService.saveReserva(reserva).subscribe();

    }


    reservas(): Reserva[] {
        console.log("this.reservasList");
        console.log(this.reservasList);
        return this.reservasList;

    }

    validReserva(reserva: Reserva): boolean {

        return true;

    }

    onClaseEdited(clase: Clase): void {

        this.claseService.saveClase(clase).subscribe();

    }


    clases(): Clase[] {

        console.log("this.clasesList");
        console.log(this.clasesList);

        return this.clasesList;

    }

    validClase(clase: Clase): boolean {
        console.log("validClass = true");
        return true;

    }


    concreteStyles(url: string) {

        return { 'background-image': 'url(' + url + ')',
                 'background-size': 'cover',
                 'background-repeat': 'round'
               };

    }


}
