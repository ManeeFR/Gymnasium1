import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, Attribute, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Reserva } from '../reserva-model/reserva.interface';
import { ReservaService } from '../reserva-service/reserva.service';

@Component({
    selector: 'app-reserva-card',
    templateUrl: './reserva-card.component.html',
    styleUrls: ['./reserva-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ReservaCardComponent {

    @Input() reserva!: Reserva;

    @Output('reservaChanged') reservaEditEmitter = new EventEmitter<Reserva>();


    constructor(private authService: AuthService, private reservaService: ReservaService, private route: Router) { }



    onReservaViewed(): void {

        console.log(this.reserva);
    }


    isImageVisible(reserva: Reserva): boolean {
        if (reserva && reserva.imagen)
            return true;
        return false;
    }


    onTitleChange(newTitle: Date): void {
        this.reserva.fecha = newTitle;
    }


    onSaveClicked(reserva: Reserva, fecha: string): void {
        this.reservaEditEmitter.emit({...reserva, email_user: this.authService.UserSessionStorage, fecha: new Date(fecha)});
    }


    deleteReserva(reservaClase: Reserva): void {

        this.reservaService.deleteReserva(reservaClase).subscribe((resp: any) => {

          if (resp.resp == "success") {

            this.route.navigate(['/reservaFail'], {

              queryParams: {
                'fecha': reservaClase.fecha,
                'franja': reservaClase.franja,
                'deporte': reservaClase.deporte,
                'sala': reservaClase.id_sala,
                'email': reservaClase.email_user,
                'imagen': reservaClase.imagen
              }

            });

          }


        });






    }


}
