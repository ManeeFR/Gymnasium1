import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeDashboardComponent } from '../home-dashboard.component';
import { CentrosComponent } from './centros/centros/centros.component';
import { ProgresoComponent } from './progreso/progreso/progreso.component';
import { ObjetivosComponent } from './objetivos/objetivos/objetivos.component';
// import { ClasesComponent } from '../../clases/clases.component';


const routes: Routes = [
    
    // Normal Loading: 
    
    // {   path: 'home/centros',
    //     // pathMatch: 'full', 
    //     component: CentrosComponent
    // },
    // {   path: 'home/progreso',
    //     // pathMatch: 'full', 
    //     component: ProgresoComponent
    // },
    // {   path: 'home/objetivos',
    //     // pathMatch: 'full', 
    //     component: ObjetivosComponent
    // },
    // {   path: 'home/clases',
    //     // pathMatch: 'full', 
    //     component: ClasesComponent
    // }
    


    //Lazy Loading: 
    
    // {
    //     path: 'home/cobros',
    //     // pathMatch: 'full',
    //     loadChildren: () => import('../bottom/cobros-pagos/cobros-pagos/cobros-pagos.module').then(m => m.CobrosPagosModule)
    // },
    // {
    //     path: 'home/financiacion',
    //     loadChildren: () => import('../bottom/financiacion/financiacion/financiacion.component').then(m => m.FinanciacionComponent)
    // },
    // {
    //     path: 'home/comercio',
    //     loadChildren: () => import('../bottom/comercio-exterior/comercio-exterior/comercio-exterior.component').then(m => m.ComercioExteriorComponent)
    // },
    // {
    //     path: '**',
    //     loadChildren: () => import('../bottom/cuentas-tarjetas/cuentas-tarjetas-layout/cuentas-tarjetas-layout.component').then(m => m.CuentasTarjetasLayoutComponent)
    // }
];

    
    
    @NgModule({
        imports: [
            RouterModule.forRoot(routes),
            RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})


export class BottomRoutingModule { }
