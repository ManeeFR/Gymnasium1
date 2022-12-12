import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../reserva-model/reserva.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
    providedIn: 'root'
})

export class ReservaService {

    constructor(private http: HttpClient, private authService: AuthService) { }


    loadReservas(): Observable<Reserva[]> {

        const params = new HttpParams().set("page", "1").set("pageSize", "10").set("email", this.authService.UserEmailSessionStorage);

        return this.http.get<Reserva[]>('http://localhost:8000/api/reservas/nextDays', { params } );

    }

    saveReserva(reserva: Reserva): Observable<Object> {

        const headers = new HttpHeaders().set("X-Auth", "reservaId");

        return this.http.post(`/api/reservas/${reserva.id}`, reserva, { headers } );

    }

}
