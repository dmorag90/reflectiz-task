import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-engine-chart',
  templateUrl: './engine-chart.component.html',
  styleUrls: ['./engine-chart.component.scss'],
})
export class EngineChartComponent implements OnInit {
  @Input() genderEngine: any[] = [];
  chart: any;

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    let labelsAr: any = [];
    let maleArr: any = [];
    let femaleArr: any = [];
    let otherArr: any = [];

    this.genderEngine.forEach((s) => {
      labelsAr.push(s.engine);
      maleArr.push(s['Male']);
      femaleArr.push(s['Female']);
      otherArr.push(s['Other']);
    });

    this.chart = new Chart('EngineChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: labelsAr,
        datasets: [
          {
            label: 'Male',
            data: maleArr,
            backgroundColor: 'blue',
          },
          {
            label: 'Female',
            data: femaleArr,
            backgroundColor: 'green',
          },
          {
            label: 'Other',
            data: otherArr,
            backgroundColor: 'red',
          },
        ],
      },
      options: {
        aspectRatio: 1.7,
      },
    });
  }
}
