import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SidebarInterface } from './home-sidebar.interface';
import { ReservaService } from 'src/app/reservas/reserva-service/reserva.service';
import { ProximaClase } from 'src/app/reservas/reserva-model/proximaClase.interface';

@Component({
    selector: 'app-home-sidebar',
    templateUrl: './home-sidebar.component.html',
    styleUrls: ['./home-sidebar.component.scss']
})

export class HomeSidebarComponent {

    fecha!: string;
    // datos!: SidebarInterface;
    datos!: ProximaClase[];
    datosMostrados!: any;

    currentDate!: Date;

    // private _jsonURL = '../../../assets/data/sidebar.json';

    constructor(private http: HttpClient, private reservasService: ReservaService) {

        this.getJSON().subscribe(data => {
            this.datos = data;
        });

    }

    // get Data(): SidebarInterface {

    //     return this.datos;
    // }
    public Data(day: number): any {

      if (day == 0) {

        this.fecha = new Date(this.datos[0].fecha).getDate() + 1 + ' / ' + (new Date(this.datos[0].fecha).getMonth() + 1);

        let data: ProximaClase[] = [];

        this.datos.forEach((x: ProximaClase) => {

          if (x.fecha == this.datos[0].fecha) {
            data.push(x);
          }

        });

        return data;

      }


      let cambioEncontrado: boolean = false;


      if (day == 1) {

        this.datos.forEach((clase: any) => {

          if (!cambioEncontrado) {

            if (clase.fecha != this.datos[0].fecha) {

              cambioEncontrado = true;

              this.fecha = new Date(clase.fecha).getDate() + 1 + ' / ' + (new Date(clase.fecha).getMonth() + 1);

              this.currentDate = clase.fecha;

              return;
            }

          }
        });


        let data: ProximaClase[] = [];

        this.datos.forEach((x: ProximaClase) => {

          if (x.fecha == this.currentDate) {
            data.push(x);
          }

        });

        return data;


      }

      cambioEncontrado = false;

      if (day == 2) {

        this.datos.forEach((clase: any) => {

          if (!cambioEncontrado) {

            if (clase.fecha != this.currentDate && clase.fecha != this.datos[0].fecha) {

              cambioEncontrado = true;

              this.fecha = new Date(clase.fecha).getDate() + 1 + ' / ' + (new Date(clase.fecha).getMonth() + 1);

              this.currentDate = clase.fecha;

              return;
            }

          }
        });

        let data: ProximaClase[] = [];

        this.datos.forEach((x: ProximaClase) => {

          if (x.fecha == this.currentDate) {
            data.push(x);
          }

        });

        return data;

      }

        return this.datos;
    }


    public tieneReservaHoy(): boolean {

      return this.datos.some(reserva => reserva.fecha.toString() === new Date().toISOString().split('T')[0] );

    }

    public getJSON(): Observable<any> {


        // this.reservasService.loadReservasSidebar().subscribe((reservas: any) => {
        //   this.datos = reservas;
        // });

        return this.reservasService.loadReservasSidebar();
        // return this.http.get(this._jsonURL);

    }

    plazasStyle(plazasLibres: number) {

      if (plazasLibres == 0) return { 'color': '#b10e0ee8' };

      else return { 'color': 'black' };

    }

}
