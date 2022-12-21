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
import { ListadoClasesComponent } from './listado-clases/listado-clases.component';
import { ClasesService } from '../clases/clases-service/clases.service';
import { ProximasClasesComponent } from './proximas-clases/proximas-clases.component';
import { ReservaDoneComponent } from './reserva-done/reserva-done.component';
import { ReservaFailComponent } from './reserva-fail/reserva-fail.component';



@NgModule({
  declarations: [
    ReservasComponent,
    ReservaCardComponent,
    ReservaImageComponent,
    ReservaTitleComponent,
    ReservaLayoutComponent,
    ListadoClasesComponent,
    ProximasClasesComponent,
    ReservaDoneComponent,
    ReservaFailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReservaRoutingModule
  ],
  providers: [ReservaService, ClasesService],
  bootstrap: [AppComponent],
})
export class ReservasModule { }
