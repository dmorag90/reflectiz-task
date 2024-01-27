import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-hobbies-chart',
  templateUrl: './hobbies-chart.component.html',
  styleUrls: ['./hobbies-chart.component.scss'],
})
export class HobbiesChartComponent implements OnInit {
  @Input() hobbiesVisitors: any[] = [];
  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    let labelsAr: string[] = [];
    let dataAr: number[] = [];

    this.hobbiesVisitors.forEach((v) => {
      labelsAr.push(v.hobby);
      dataAr.push(v.counts);
    });

    this.chart = new Chart('HobbyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: labelsAr,
        datasets: [
          {
            label: '#Visitors',
            data: dataAr,
            backgroundColor: 'blue',
          },
        ],
      },
      options: {
        aspectRatio: 1.4,
      },
    });
  }
}
