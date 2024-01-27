import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seat-table',
  templateUrl: './seat-table.component.html',
  styleUrls: ['./seat-table.component.scss'],
})
export class SeatTableComponent {
  @Input() seatAge: any[] = [];

  dataSource = this.seatAge;
  displayedColumns: string[] = [
    'ageGroup',
    'Two Seats',
    'Five Seats',
    'Seven Seats',
  ];
}
