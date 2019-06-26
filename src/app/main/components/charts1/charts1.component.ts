import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

const graficos: any = {
  grafico1: {
    labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
    data:  [24, 30, 46],
    type: 'doughnut',
    leyenda: 'El pan se come con'
  },
  grafico2: {
    labels: ['Hombres', 'Mujeres'],
    data:  [4500, 6000],
    type: 'doughnut',
    leyenda: 'Entrevistados'
  },
  grafico3: {
    labels: ['Si', 'No'],
    data:  [95, 5],
    type: 'doughnut',
    leyenda: '¿Le dan gases los frijoles?'
  },
  grafico4: {
    labels: ['No', 'Si'],
    data:  [85, 15],
    type: 'doughnut',
    leyenda: '¿Le importa que le den gases?'
  },
};

@Component({
  selector: 'app-charts1',
  templateUrl: './charts1.component.html',
  styles: []
})

export class Charts1Component implements OnInit {

   // Doughnut
   public legendChart1 = graficos.grafico1.leyenda;
   public doughnutChart1Labels: Label[] = graficos.grafico1.labels;
   public doughnutChart1Data: MultiDataSet = graficos.grafico1.data;
   public legendChart2 = graficos.grafico2.leyenda;
   public doughnutChart2Labels: Label[] = graficos.grafico2.labels;
   public doughnutChart2Data: MultiDataSet = graficos.grafico2.data;
   public legendChart3 = graficos.grafico3.leyenda;
   public doughnutChart3Labels: Label[] = graficos.grafico3.labels;
   public doughnutChart3Data: MultiDataSet = graficos.grafico3.data;
   public legendChart4 = graficos.grafico4.leyenda;
   public doughnutChart4Labels: Label[] = graficos.grafico4.labels;
   public doughnutChart4Data: MultiDataSet = graficos.grafico4.data;
   public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
