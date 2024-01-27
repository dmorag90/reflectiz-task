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
  numOfVisitors: number = 0;
  numOfForms: number = 0;

  constructor(private buyerService: BuyerService) {}

  ngOnInit(): void {
    this.getAllData();
    this.getCount();
  }
  getCount() {
    let visitStat = this.buyerService.getCount();
    this.numOfVisitors = visitStat.visitors;
    this.numOfForms = visitStat.forms;
  }
  getAllData() {
    this.buyersArr = this.buyerService.getAllData();
    console.log(this.buyersArr);
    this.createGenderEngine();
    this.createAgeSeat();
    this.createHobbies();
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
            this.genderEngine[2].Male++;
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
  }

  createAgeSeat() {
    let today = new Date().getFullYear();
    //calculate age
    this.buyersArr.forEach((b) => {
      b.birthDate = new Date(b.birthDate);
      b.age = today - b.birthDate.getFullYear();
      b.age = Math.floor(b.age);
      b.ageGroup =
        b.age < 26
          ? '18-25'
          : b.age < 36
          ? '26-35'
          : b.age < 46
          ? '36-45'
          : b.age < 56
          ? '46-55'
          : '>55';
    });
    console.log(this.buyersArr);
    this.seatsAge = [
      { ageGroup: '18-25', 'Two Seats': 0, 'Five Seats': 0, 'Seven Seats': 0 },
      { ageGroup: '26-35', 'Two Seats': 0, 'Five Seats': 0, 'Seven Seats': 0 },
      { ageGroup: '36-45', 'Two Seats': 0, 'Five Seats': 0, 'Seven Seats': 0 },
      { ageGroup: '46-55', 'Two Seats': 0, 'Five Seats': 0, 'Seven Seats': 0 },
      { ageGroup: '>55', 'Two Seats': 0, 'Five Seats': 0, 'Seven Seats': 0 },
    ];
    let twoS = this.buyersArr.filter((b) => b.seats >= 2 && b.seats < 5);
    let fiveS = this.buyersArr.filter((b) => b.seats >= 5 && b.seats < 7);
    let sevenS = this.buyersArr.filter((b) => b.seats == 7);
    for (let buyer of twoS) {
      switch (buyer.ageGroup) {
        case '18-25':
          this.seatsAge[0]['Two Seats']++;
          break;
        case '26-35':
          this.seatsAge[1]['Two Seats']++;
          break;
        case '36-45':
          this.seatsAge[2]['Two Seats']++;
          break;
        case '46-55':
          this.seatsAge[3]['Two Seats']++;
          break;
        case '>55':
          this.seatsAge[4]['Two Seats']++;
          break;
      }
    }
    for (let buyer of fiveS) {
      switch (buyer.ageGroup) {
        case '18-25':
          this.seatsAge[0]['Five Seats']++;
          break;
        case '26-35':
          this.seatsAge[1]['Five Seats']++;
          break;
        case '36-45':
          this.seatsAge[2]['Five Seats']++;
          break;
        case '46-55':
          this.seatsAge[3]['Five Seats']++;
          break;
        case '>55':
          this.seatsAge[4]['Five Seats']++;
          break;
      }
    }
    for (let buyer of sevenS) {
      switch (buyer.ageGroup) {
        case '18-25':
          this.seatsAge[0]['Seven Seats']++;
          break;
        case '26-35':
          this.seatsAge[1]['Seven Seats']++;
          break;
        case '36-45':
          this.seatsAge[2]['Seven Seats']++;
          break;
        case '46-55':
          this.seatsAge[3]['Seven Seats']++;
          break;
        case '>55':
          this.seatsAge[4]['Seven Seats']++;
          break;
      }
    }
    console.log(this.seatsAge);
  }
  createHobbies() {
    this.hobbiesVisitors = [
      { hobby: 'Cooking', counts: 0 },
      { hobby: 'Books', counts: 0 },
      { hobby: 'Gaming', counts: 0 },
      { hobby: 'Gym', counts: 0 },
      { hobby: 'Tenis', counts: 0 },
      { hobby: 'Golf', counts: 0 },
      { hobby: 'jogging', counts: 0 },
      { hobby: 'Carpentary', counts: 0 },
      { hobby: 'Drawing', counts: 0 },
      { hobby: 'Tai Chi', counts: 0 },
      { hobby: 'Other Sports', counts: 0 },
    ];
    this.hobbiesVisitors.forEach((h) => {
      for (let buyer of this.buyersArr) {
        h.counts += buyer.hobbies.includes(h.hobby) ? 1 : 0;
      }
    });
    this.hobbiesVisitors.sort((a, b) =>
      a.counts > b.counts ? -1 : a.counts < b.counts ? 1 : 0
    );
    console.log(this.hobbiesVisitors);
  }
}
