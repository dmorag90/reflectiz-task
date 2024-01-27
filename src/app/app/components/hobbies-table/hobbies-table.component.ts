import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hobbies-table',
  templateUrl: './hobbies-table.component.html',
  styleUrls: ['./hobbies-table.component.scss'],
})
export class HobbiesTableComponent {
  @Input() hobbiesVisitors: any[] = [];

  dataSource = this.hobbiesVisitors;
  displayedColumns: string[] = ['hobby', 'counts'];
}
