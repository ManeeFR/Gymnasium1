import { ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentrosService } from '../centro-services/centros.service';
import { Centro } from '../centro-model/centro.interface';
import { AppConfig, APP_CONFIG, CONFIG_TOKEN } from './config';
import { CENTROS } from '../../../../../db-data';



@Component({
    selector: 'app-centros',
    templateUrl: './centros.component.html',
    styleUrls: ['./centros.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ 
        { provide: CONFIG_TOKEN, useValue: APP_CONFIG },
        CentrosService
    ]
    
})


export class CentrosComponent implements OnInit {

    centrosList!: Centro[];

    centrosCount = CENTROS.filter((x: any) => x).length;


    constructor(private centrosService: CentrosService, 
                @Inject(CONFIG_TOKEN) private config: AppConfig, 
                private injector: Injector,
                private ruta: Router) {
    }

 
    

    ngOnInit(): void {

        this.centrosService.loadCentros().subscribe(centros => this.centrosList = centros);

    }


    // onCentroEdited(centro: Centro): void {

    //     this.centrosService.saveCentro(centro).subscribe();

    // }


    centros(): Centro[] {

        return this.centrosList;

    }


    concreteStyles(first: boolean, last: boolean, even: boolean, odd: boolean): Object {
        return {'is-first': first, 
                'is-last': last, 
                'is-even': even, 
                'is-odd': odd }
    }

} 
