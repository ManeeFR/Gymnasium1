import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ClasesLayoutComponent } from './clases/clases-layout/clases-layout.component';
import { CentrosComponent } from './centros/centros/centros.component';
import { ProgresoComponent } from './progreso/progreso/progreso.component';
// import { CobrosPagosComponent } from './cobros-pagos/cobros-pagos/cobros-pagos.component';
import { DashboardFiltersComponent } from './shared/dashboard-filters/dashboard-filters.component';
import { ClasesIndividualesComponent } from './clases/clases-individuales/clases-individuales.component';
import { ClasesGrupalesComponent } from './clases/clases-grupales/clases-grupales.component';
import { HttpClientModule } from '@angular/common/http';
// import { SharedModule } from '../../shared/shared.module';
// import { EurosPipe } from '../../shared/pipes/euros.pipe';
// import { HomeModule } from '../home.module';
// import { BottomLayoutComponent } from './bottom-layout/bottom-layout.component';
import { BottomRoutingModule } from './bottom-routing.module';
import { HomeRoutingModule } from '../home-routing.module';
import { BottomLayoutModule } from './bottom-layout/bottom-layout.module';
import { CentroCardComponent } from './centros/centro-card/centro-card.component';
import { CentroImageComponent } from './centros/centro-image/centro-image.component';
import { CentroTitleComponent } from './centros/centro-title/centro-title.component';
import { CentroLayoutComponent } from './centros/centro-layout/centro-layout.component';
import { CentrosModule } from './centros/centros/centros.module';



@NgModule({
    declarations: [
        ProgresoComponent,
        ClasesLayoutComponent,
        ClasesIndividualesComponent,
        ClasesGrupalesComponent,
        DashboardFiltersComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserModule,
        HttpClientModule,
        BottomRoutingModule,
        HomeRoutingModule,
        AppRoutingModule,
        BottomLayoutModule,
        CentrosModule
    ],
    exports: [
        CentrosComponent,
        ProgresoComponent,
        ClasesLayoutComponent,
        ClasesIndividualesComponent,
        ClasesGrupalesComponent,
        DashboardFiltersComponent
    ]
})
export class BottomModule { }
