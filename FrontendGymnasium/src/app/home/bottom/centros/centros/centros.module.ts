import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CentroTitleComponent } from '../centro-title/centro-title.component';
import { CentroLayoutComponent } from '../centro-layout/centro-layout.component';
import { AppComponent } from '../../../../app.component';
import { CentroCardComponent } from '../centro-card/centro-card.component';
import { CentroImageComponent } from '../centro-image/centro-image.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { AppRoutingModule } from '../../../../app-routing.module';
// import { BottomModule } from '../../../../home/bottom/bottom.module';
import { CentrosRoutingModule } from '../centros-routing/centros-routing.module';
import { RouterModule } from '@angular/router';
import { CentrosComponent } from './centros.component';
// import { HomeModule } from '../../../home.module';
import { CentrosService } from '../centro-services/centros.service';

@NgModule({
    declarations: [
        CentroTitleComponent,
        CentroLayoutComponent,
        CentroCardComponent,
        CentroImageComponent,
        CentrosComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CommonModule,
        RouterModule,
        SharedModule,
        AppRoutingModule,
        // BottomModule,
        CentrosRoutingModule,
        RouterModule,
        // HomeModule
    ],
    exports: [
        CentroTitleComponent,
        CentroLayoutComponent,
        CentroCardComponent,
        CentroImageComponent,
        CentrosComponent
    ],
    providers: [CentrosService],
    bootstrap: [AppComponent],
    entryComponents: [CentroTitleComponent]
})
export class CentrosModule { }
