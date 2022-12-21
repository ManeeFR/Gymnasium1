import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeDashboardComponent } from './home/home-dashboard.component';
import { ClasesLayoutComponent } from './home/bottom/clases/clases-layout/clases-layout.component';
import { CentrosComponent } from './home/bottom/centros/centros/centros.component';
import { ProgresoComponent } from './home/bottom/progreso/progreso/progreso.component';
import { ObjetivosComponent } from './home/bottom/objetivos/objetivos/objetivos.component';

import { AppComponent } from './app.component';
import { ClasesDashboardLayoutComponent } from './clases/clases-layout/clases-dashboard-layout.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReservasComponent } from './reservas/reservas/reservas.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ReservaDoneComponent } from './reservas/reserva-done/reserva-done.component';
import { ReservaFailComponent } from './reservas/reserva-fail/reserva-fail.component';


const routes: Routes = [

    { path: "", component: IndexComponent, pathMatch: "full" },

    // { path: "index", component: IndexComponent, pathMatch: "full" },

    { path: "login", component: LoginComponent, pathMatch: "full" },

    { path: "register", component: RegisterComponent, pathMatch: "full" },

    {
        path: 'home',
        //   pathMatch: 'full',
        component: HomeDashboardComponent,
        children: [
            { path: 'centros', component: CentrosComponent },
            { path: 'progreso', component: ProgresoComponent },
            { path: 'objetivos', component: ObjetivosComponent },
            { path: 'clases', component: ClasesLayoutComponent },
        ]
    },
    {
        path: 'clases',
        //   pathMatch: 'full',
        component: ClasesDashboardLayoutComponent,
        children: [
            { path: 'listado', component: ClasesDashboardLayoutComponent },
        ]
    },
    {
        path: 'reservas',
        //   pathMatch: 'full',
        component: ReservasComponent
    },
    {
      path: 'reservaDone',
      component: ReservaDoneComponent,

    },
    {
      path: 'reservaFail',
      component: ReservaFailComponent,

    },
    {
      path: 'pagina404',
      component: ErrorPageComponent
    },
    {
      path: '**',
      redirectTo: 'pagina404'
    }
];


  // const routes: Routes = [
  //   {
  //     path: 'home',
  //     loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
  //   },
  //   {
  //     path: 'reservas',
  //     loadChildren: () => import('../app/home/home.module').then(m => m.ReservasModule)
  //   },
  //   {
  //     path: 'clases',
  //     loadChildren: () => import('../app/clases/clases.module').then(m => m.ClasesModule)
  //   },
  //   {
  //     pathMatch: 'full',
  //     component: HomeDashboardComponent,
  //     children: [
  //       {
  //           path: 'home/cobros',
  //           pathMatch: 'full',
  //           loadChildren: () => import('../app/home/bottom/cobros-pagos/cobros-pagos/cobros-pagos.module').then(m => m.CobrosPagosModule)
  //       },

  //     ]
  //   }
  // ];



@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
