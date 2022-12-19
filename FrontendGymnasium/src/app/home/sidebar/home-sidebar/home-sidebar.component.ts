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

      console.log("this.datos");
      console.log(this.datos);

      if (day == 0) {

        this.fecha = new Date(this.datos[0].fecha).getDate() + 1 + ' / ' + (new Date(this.datos[0].fecha).getMonth() + 1);

      }


      if (day == 1) {

        this.datos.forEach((clase: any) => {

          if (clase.fecha != this.datos[0].fecha) {
            this.fecha = new Date(clase.fecha).getDate() + 1 + ' / ' + (new Date(clase.fecha).getMonth() + 1);
          }

          // this.datos.filter((x: any) => {
          //   new Date(x.fecha).getDate() ==
          // });

        });

      }

      // if (day == 2) {

      //   this.datos.forEach((clase: any) => {

      //     if (clase.fecha != this.datos[0].fecha) {
      //       this.fecha = clase.fecha.getDate() + ' / ' + clase.fecha.getMonth();
      //     }

      //   });

      // }

        return this.datos;
    }


    public tieneReservaHoy(): boolean {

      return this.datos.some((reserva: any) => reserva.fecha.toString() === new Date().toISOString().split('T')[0] );

    }

    public getJSON(): Observable<any> {


        // this.reservasService.loadReservasSidebar().subscribe((reservas: any) => {
        //   this.datos = reservas;
        // });

        return this.reservasService.loadReservasSidebar();
        // return this.http.get(this._jsonURL);

    }

}
