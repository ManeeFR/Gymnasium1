import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-title',
  templateUrl: './reserva-title.component.html',
  styleUrls: ['./reserva-title.component.scss']
})
export class ReservaTitleComponent {

  constructor() { }

  @Input() title!: string;


}
