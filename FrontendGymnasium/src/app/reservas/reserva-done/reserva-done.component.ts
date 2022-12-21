import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { urlencoded } from 'express';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-reserva-done',
  templateUrl: './reserva-done.component.html',
  styleUrls: ['./reserva-done.component.scss']
})


export class ReservaDoneComponent implements OnInit {

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
