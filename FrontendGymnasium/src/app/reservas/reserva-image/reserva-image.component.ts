import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-image',
  templateUrl: './reserva-image.component.html',
  styleUrls: ['./reserva-image.component.scss']
})
export class ReservaImageComponent {

  constructor() { }

  @Input() src!: string | undefined;


}
