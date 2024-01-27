import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-seat-chart',
  templateUrl: './seat-chart.component.html',
  styleUrls: ['./seat-chart.component.scss'],
})
export class SeatChartComponent implements OnInit {
  @Input() seatAge: any[] = [];
  chart: any;
  ngOnInit() {
    this.createChart();
  }

  createChart() {
    let labelsAr: any = [];
    let twoSeatsArr: any = [];
    let fiveSeatsArr: any = [];
    let sevenSeatsArr: any = [];
    this.seatAge.forEach((s) => {
      labelsAr.push(s.ageGroup);
      twoSeatsArr.push(s['Two Seats']);
      fiveSeatsArr.push(s['Five Seats']);
      sevenSeatsArr.push(s['Seven Seats']);
    });
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: labelsAr,
        datasets: [
          {
            label: '2 Seats',
            data: twoSeatsArr,
            backgroundColor: 'blue',
          },
          {
            label: '5 Seats',
            data: fiveSeatsArr,
            backgroundColor: 'green',
          },
          {
            label: '7 Seats',
            data: sevenSeatsArr,
            backgroundColor: 'red',
          },
        ],
      },
      options: {
        aspectRatio: 1.4,
      },
    });
  }
}
