import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-engine-table',
  templateUrl: './engine-table.component.html',
  styleUrls: ['./engine-table.component.scss'],
})
export class EngineTableComponent {
  @Input() genderEngine: any[] = [];

  dataSource = this.genderEngine;
  displayedColumns: string[] = ['engine', 'max', 'maxValue'];
}
