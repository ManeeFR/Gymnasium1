import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../reserva-model/reserva.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { ProximaClase } from '../reserva-model/proximaClase.interface';
import { urlencoded } from 'express';

@Injectable({
    providedIn: 'root'
})

export class ReservaService {

    constructor(private http: HttpClient, private authService: AuthService) { }


    loadReservas(): Observable<Reserva[]> {

        const params = new HttpParams().set("page", "1").set("pageSize", "10").set("email", this.authService.UserEmailSessionStorage);

        return this.http.get<Reserva[]>('http://localhost:8000/api/reservas/nextDays', { params } );

    }
    /* HAY QUE CREAR UNA TABLA "PROXIMAS CLASES"
    QUE RELACIONE LAS TABLAS "CLASES" Y "RESERVAS",
    LUEGO, METERLE DATOS A "PROXIMAS CLASES" Y PINTAR
    LOS DATOS DESDE ESTE MÉTODO:*/
    loadReservasAll(deporte: string): Observable<ProximaClase[]> {

        const params = new HttpParams();

        const url = 'http://localhost:8000/api/reservas/' + deporte;


        return this.http.get<ProximaClase[]>(url, { params } );

    }


    loadReservasSidebar(): Observable<ProximaClase[]> {

        const params = new HttpParams();

        const url = 'http://localhost:8000/api/clasestrimestre/sidebar';


        return this.http.get<ProximaClase[]>(url);

    }


    saveReserva(reserva: Reserva): Observable<Object> {

        const headers = new HttpHeaders().set("X-Auth", "reservaId");

        return this.http.post('http://localhost:8000/api/reservas', reserva, { headers } );

    }

    deleteReserva(reserva: Reserva): Observable<Object> {

        // const options = { headers: new HttpHeaders().set('Content-type','application/Json') };

        // const miReserva = {
        //   email_user: 'mane',
        //   id_sala: 6,
        //   deporte: 'GAP',
        //   franja: '19:00 - 20:00',
        //   fecha: '2022-12-26',
        // }

        console.log("reserva111");
        console.log(reserva);

        const params = new HttpParams().set("email_user", this.authService.UserEmailSessionStorage)
                                       .set("id_sala", reserva.id_sala)
                                       .set("deporte", reserva.deporte)
                                       .set("franja", reserva.franja)
                                       .set("plazasLibres", reserva.plazasLibres!)
                                       .set("fecha", new Date(reserva.fecha).toISOString().split('T')[0]);


        return this.http.delete('http://localhost:8000/api/reservas/' + reserva.id, { params } );

    }

}
