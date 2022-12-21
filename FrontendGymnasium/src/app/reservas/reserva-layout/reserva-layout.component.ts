import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva-model/reserva.interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ReservaService } from '../reserva-service/reserva.service';
import { ClasesService } from '../../clases/clases-service/clases.service';
import { Clase } from 'src/app/clases/model/clase.interface';
import { ProximaClase } from 'src/app/reservas/reserva-model/proximaClase.interface';



@Component({
    selector: 'app-reserva-layout',
    templateUrl: './reserva-layout.component.html',
    styleUrls: ['./reserva-layout.component.scss'],
    providers: [
        ReservaService,
        ClasesService
    ],

})


export class ReservaLayoutComponent implements OnInit, AfterContentChecked {


    tieneReservasHoy!: boolean;
    showReservasAll!: boolean;
    showReservasUser!: boolean;

    reservasList!: Reserva[];
    reservasListAll!: ProximaClase[];
    clasesList!: Clase[];

    currentDay: number = new Date().getDate();
    currentDayAll: number = new Date().getDate();


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


        if (this.authService.UserEmailSessionStorage && this.authService.getToken() !== undefined) {

            this.ruta.navigate(["/reservas"]);

        } else {
            this.ruta.navigate(["/login"]);
        }

        this.showReservasUser = true;
        this.showReservasAll = false;



    }

    onReservaEdited(reserva: Reserva): void {

        this.reservaService.saveReserva(reserva).subscribe();
    }


    reservas(): Reserva[] {

      this.reservasList.forEach((reserva: any) => {
        reserva.imagen = 'assets/img/' + reserva.deporte + '.png';
      });

        return this.reservasList;
    }

    reservasAll(deporte: string): ProximaClase[] {

        this.reservaService.loadReservasAll(deporte).subscribe((reservas: any) => {

            this.reservasListAll = reservas;

            this.clasesList.forEach((clase: any) => {

              if (clase.deporte === deporte) {

                this.reservasListAll.forEach((reserva: any) => {

                  reserva.imagen = clase.imagen;

                });

              }

            });

            console.log("this.reservasListAll98");
            console.log(this.reservasListAll);
        });

        return this.reservasListAll;
    }


    tieneReservaHoy(): boolean {


        return this.reservasList.some(reserva => reserva.fecha.toString() === new Date().toISOString().split('T')[0] );
    }

    tieneReservaHoyAll(): boolean {


        return this.reservasListAll.some(reserva => reserva.fecha.toString() === new Date().toISOString().split('T')[0] );
    }


    validReserva(reserva: Reserva | ProximaClase): boolean {

        const date = new Date(reserva.fecha).getDate();

        console.log("this.currentDay");
        console.log(this.currentDay);
        console.log("date");
        console.log(date);

        if (date !== this.currentDay) {
            this.currentDay = date;
            console.log("tre");
            return true;
          }

          console.log("fals");
        return false;
    }

    validReservaAll(reserva: Reserva | ProximaClase): boolean {

        const date = new Date(reserva.fecha).getDate();

        console.log("this.currentDayAll");
        console.log(this.currentDayAll);
        console.log("date");
        console.log(date);

        if (date !== this.currentDayAll) {
            this.currentDayAll = date;
            console.log("tre");
            return true;
          }

          console.log("fals");
        return false;
    }

    showClase($event: any) {

      console.log("$event");
      console.log($event);

        this.reservasAll($event);
        this.showReservasUser = false;
        this.showReservasAll = true;

    }

    showNextClasses(deporte: string) {

        this.reservasAll(deporte);
        this.showReservasUser = false;
        this.showReservasAll = true;

    }

    showReservas() {

        this.showReservasUser = true;
        this.showReservasAll = false;

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

    bgStyles(url: string | undefined) {

      return {
        'background-image': 'url(' + url + ')',
        'background-size': 'cover',
        'background-repeat': 'round',
        'margin-top': '5vh'
      };
    }


    // concreteStyles(url: string) {

    //     return { 'background-image': 'url(' + url + ')',
    //              'background-size': 'cover',
    //              'background-repeat': 'round'
    //            };
    // }

}
