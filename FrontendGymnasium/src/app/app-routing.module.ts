import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeDashboardComponent } from './home/home-dashboard.component';
import { ClasesLayoutComponent } from './home/bottom/clases/clases-layout/clases-layout.component';
import { CentrosComponent } from './home/bottom/centros/centros/centros.component';
import { ProgresoComponent } from './home/bottom/progreso/progreso/progreso.component';
import { ObjetivosComponent } from './home/bottom/objetivos/objetivos/objetivos.component';
import { ClasesComponent } from './clases/clases.component';
import { AppComponent } from './app.component';


const routes: Routes = [
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
    // {
    //     path: 'clases',
    //     //   pathMatch: 'full',
    //     component: AppComponent,
    //     children: [
    //         { path: 'clases', component: ClasesComponent },
    //     ]
    // }
];


//   const routes: Routes = [
//     {
//     //   path: 'home',
//     //   loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
//     // },
//     // // {
//     // //   path: 'reservas',
//     // //   loadChildren: () => import('../app/home/home.module').then(m => m.ReservasModule)
//     // // },
//     // {
//     //   path: 'clases',
//     //   loadChildren: () => import('../app/clases/clases.module').then(m => m.ClasesModule)
//     // }

//       pathMatch: 'full',
//       component: HomeDashboardComponent,
//       children: [
//         {
//             path: 'home/cobros',
//             pathMatch: 'full',
//             loadChildren: () => import('../app/home/bottom/cobros-pagos/cobros-pagos/cobros-pagos.module').then(m => m.CobrosPagosModule)
//         },

//       ]
//     }
//   ];



@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
