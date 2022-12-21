import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserva-fail',
  templateUrl: './reserva-fail.component.html',
  styleUrls: ['./reserva-fail.component.scss']
})
export class ReservaFailComponent implements OnInit {

  fecha!: Date;
  franja!: string;
  deporte!: string;
  sala!: number;
  email!: string;
  imagen!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {

        this.fecha = params['fecha'];
        this.franja = decodeURI(params['franja']);
        this.deporte = params['deporte'];
        this.sala = params['sala'];
        this.email = params['email'];
        this.imagen = params['imagen'];

      }
    );
  }

}
