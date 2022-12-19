import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from '../home/home-dashboard.component';



const routes: Routes = [

    // {
    //     path: 'home/clases',
    //     // pathMatch: 'full',
    //     component: HomeDashboardComponent
    // }

];



@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class SharedRoutingModule { }
