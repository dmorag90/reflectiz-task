import { BuyerService } from './../../services/buyer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  buyersArr: any[] = [];
  genderEngine: any[] = [];
  hobbiesVisitors: any[] = [];
  seatsAge: any[] = [];
  dataSource = this.genderEngine;
  displayedColumns: string[] = ['engine', 'max', 'maxValue'];

  constructor(private buyerService: BuyerService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.buyersArr = this.buyerService.getAllData();
    console.log(this.buyersArr);
    this.createGenderEngine();
  }
  createGenderEngine() {
    this.genderEngine = [
      { engine: 'Fuel', Male: 0, Female: 0, Other: 0 },
      { engine: 'Electric', Male: 0, Female: 0, Other: 0 },
      { engine: 'Hybrid', Male: 0, Female: 0, Other: 0 },
    ];

    for (let buyer of this.buyersArr) {
      if (buyer.engine == 'fuel') {
        switch (buyer.gender) {
          case 'male':
            this.genderEngine[0].Male++;
            break;
          case 'female':
            this.genderEngine[0].Female++;
            break;
          case 'other':
            this.genderEngine[0].Other++;
            break;
        }
      }
      if (buyer.engine == 'electric') {
        switch (buyer.gender) {
          case 'male':
            this.genderEngine[0].Male++;
            break;
          case 'female':
            this.genderEngine[1].Female++;
            break;
          case 'other':
            this.genderEngine[1].Other++;
            break;
        }
      }
      if (buyer.engine == 'hybrid') {
        switch (buyer.gender) {
          case 'male':
            this.genderEngine[0].Male++;
            break;
          case 'female':
            this.genderEngine[2].Female++;
            break;
          case 'other':
            this.genderEngine[2].Other++;
            break;
        }
      }
    }
    console.log(this.genderEngine);
    for (let engine of this.genderEngine) {
      let max = Object.keys(engine).reduce((a, b) =>
        engine[a] > engine[b] ? a : b
      );
      engine['max'] = max;
      engine['maxValue'] = engine[max];
    }
    console.log(this.genderEngine);
    this.dataSource = this.genderEngine;
  }
}
