import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, Attribute, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Reserva } from '../reserva-model/reserva.interface';

@Component({
    selector: 'app-reserva-card',
    templateUrl: './reserva-card.component.html',
    styleUrls: ['./reserva-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ReservaCardComponent {

    @Input() reserva!: Reserva;

    @Input() cardIndex!: number;

    @Output('reservaChanged') reservaEditEmitter = new EventEmitter<Reserva>();


    constructor(private authService: AuthService) { }



    onReservaViewed(): void {

        console.log(this.reserva);
    }


    isImageVisible(reserva: Reserva): boolean {
        if (reserva && reserva.iconUrl)
            return true;
        return false;
    }


    onTitleChange(newTitle: Date): void {
        this.reserva.fecha = newTitle;
    }


    onSaveClicked(reserva: Reserva, fecha: string): void {
        this.reservaEditEmitter.emit({...reserva, email_user: this.authService.UserSessionStorage, fecha: new Date(fecha)});
    }


}
