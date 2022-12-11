import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservaCardComponent } from './reserva-card/reserva-card.component';
import { ReservaImageComponent } from './reserva-image/reserva-image.component';
import { ReservaTitleComponent } from './reserva-title/reserva-title.component';
import { ReservaLayoutComponent } from './reserva-layout/reserva-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaService } from './reserva-service/reserva.service';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    ReservasComponent,
    ReservaCardComponent,
    ReservaImageComponent,
    ReservaTitleComponent,
    ReservaLayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReservaRoutingModule
  ],
  providers: [ReservaService],
  bootstrap: [AppComponent],
})
export class ReservasModule { }
