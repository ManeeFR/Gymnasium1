import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasesDashboardLayoutComponent } from './clases-layout/clases-dashboard-layout.component';


const routes: Routes = [
    {
      path: 'clases',
      component: ClasesDashboardLayoutComponent,

    }
  ];    
  
  
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class ClasesRoutingModule { }
