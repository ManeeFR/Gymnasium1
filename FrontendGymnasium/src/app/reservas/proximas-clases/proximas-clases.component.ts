
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Reserva } from '../reserva-model/reserva.interface';
import { ProximaClase } from 'src/app/reservas/reserva-model/proximaClase.interface';
import { ReservaService } from '../reserva-service/reserva.service';


@Component({
  selector: 'app-proximas-clases',
  templateUrl: './proximas-clases.component.html',
  styleUrls: ['./proximas-clases.component.scss']
})
export class ProximasClasesComponent {

  @Input() clase!: ProximaClase;

  @Input() cardIndex!: number;

  @Output('reservaChanged') reservaEditEmitter = new EventEmitter<Reserva>();


  constructor(private authService: AuthService, private reservaService: ReservaService) { }



  onReservaViewed(): void {

    console.log(this.clase);
  }


  isImageVisible(reserva: Reserva): boolean {
    if (reserva && reserva.iconUrl)
      return true;
    return false;
  }


  onTitleChange(newTitle: Date): void {
    this.clase.fecha = newTitle;
  }


  onSaveClicked(clase: ProximaClase, fecha: string): void {
    this.reservaEditEmitter.emit({ ...clase, email_user: this.authService.UserSessionStorage, fecha: new Date(fecha) });
  }


  reservar(plazasLibres: number) {


    const reservaClase: Reserva = {

      id_sala: this.clase.id_sala,
      email_user: sessionStorage.getItem("email")!,
      deporte: this.clase.deporte,
      franja: encodeURI(this.clase.franja),
      fecha: this.clase.fecha,
      plazasLibres: plazasLibres,
      aforo: this.clase.plazasMaximas

    };

    console.log("reservaClase");
    console.log(reservaClase);

    this.reservaService.saveReserva(reservaClase).subscribe((resp: any) => {
      // this.reservasList = reservas;
    });


  }



}



