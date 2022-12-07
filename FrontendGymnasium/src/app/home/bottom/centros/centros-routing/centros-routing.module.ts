import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentroLayoutComponent } from '../centro-layout/centro-layout.component';


const routes: Routes = [
    {
      path: 'centro',
      component: CentroLayoutComponent,

    }
  ];    
  
  
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class CentrosRoutingModule { }
