import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clase } from 'src/app/clases/model/clase.interface';

@Component({
    selector: 'app-listado-clases',
    templateUrl: './listado-clases.component.html',
    styleUrls: ['./listado-clases.component.scss']
})

export class ListadoClasesComponent {

    @Input() clase!: Clase;

    @Output('showClase') onClaseClicked = new EventEmitter;


    claseClicked() {

      console.log("hola");

      this.onClaseClicked.emit(this.clase.deporte);

    }


    bgStyle(url: string) {
      return { 'background-image': 'url(' + url + ')',
               'background-size': 'cover',
               'background-repeat': 'round'
    };
    }

}
