import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.css']
})
export class DoughnutchartComponent implements OnInit {
mappedPlan:any = []
mappedPlanTotal:any = []

categories = [
  {name:"food", total:100},
  {name:"music", total:350},
  {name:"food", total:200},
  {name:"example", total:270},
  {name:"example", total:210}
]

plans = [...this.categories]

  public doughnutChartLabels = this.mappedPlan;
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: this.mappedPlanTotal, label: 'Series A' },
      // { data: [ 50, 150, 120 ], label: 'Series B' },
      // { data: [ 20, 130, 70 ], label: 'Series C' }
    ];
    // ChartConfiguration<'doughnut'>['options'] =
  public doughnutChartOptions: any = {
    responsive: true,
    plugins: { legend: { position: 'right' } }
  };

  // public options: any = {
  //   legend: { position: 'left' }
  // }
  constructor() {

  }

  ngOnInit(): void {
    this.plans.map((plan)=> {
  this.mappedPlan.push(plan.name);
  this.mappedPlanTotal.push(plan.total);
     } )
            console.log(this.mappedPlan, this.mappedPlanTotal)
            console.log(...this.mappedPlan)
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
