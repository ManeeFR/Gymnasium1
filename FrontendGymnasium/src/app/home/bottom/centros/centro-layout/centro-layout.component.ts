import { ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';
import { CentrosService } from '../centro-services/centros.service';
import { Centro } from '../centro-model/centro.interface';
import { AppConfig, APP_CONFIG, CONFIG_TOKEN } from '../centros/config';
import { CENTROS } from '../../../../../db-data';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';



@Component({
    selector: 'app-centro-layout',
    templateUrl: './centro-layout.component.html',
    styleUrls: ['./centro-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: CONFIG_TOKEN, useValue: APP_CONFIG },
        CentrosService
    ],

})


export class CentroLayoutComponent implements OnInit {

    centrosList!: Centro[];

    centrosCount = CENTROS.filter((x: any) => x).length;


    constructor(private centrosService: CentrosService,
                @Inject(CONFIG_TOKEN) private config: AppConfig,
                private injector: Injector,
                private ruta: Router) {
    }


    ngOnInit(): void {


    }


    onCentroEdited(centro: Centro): void {

        this.centrosService.saveCentro(centro).subscribe();

    }


    centros(): Centro[] {

        this.centrosService.loadCentros().subscribe((centros: any) => {
            this.centrosList = centros;

        });

        let aux: Centro[] = this.centrosList;
        this.centrosList = [...aux];

        return this.centrosList;



        // console.log('this.centrosList$');
        // console.log(this.centrosList$);
        // return this.centrosList$;

    }


    validClass(centro: Centro): boolean {

        return true;

    }


    concreteStyles(url: string) {

        return { 'background-image': 'url(' + url + ')',
                 'background-size': 'cover',
                 'background-repeat': 'round'
               };

    }

}
