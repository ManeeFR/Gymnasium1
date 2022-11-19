import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-filters',
  templateUrl: './dashboard-filters.component.html',
  styleUrls: ['./dashboard-filters.component.scss']
})
export class DashboardFiltersComponent {

  @Input() titulo: string = '';

  constructor() { }

}
