import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaDoneComponent } from './reserva-done/reserva-done.component';
import { ReservasComponent } from './reservas/reservas.component';


const routes: Routes = [
    {
        path: 'reservas',
        component: ReservasComponent,

    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class ReservaRoutingModule { }
