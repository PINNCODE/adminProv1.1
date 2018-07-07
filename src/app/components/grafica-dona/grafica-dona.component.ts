import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('dataGrafico') dataGrafico: any;

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartType: string = '';

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
