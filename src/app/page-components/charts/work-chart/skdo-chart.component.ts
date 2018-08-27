import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {AmChartsService} from '@amcharts/amcharts3-angular';


@Component({
  selector: 'skdo-chart',
  templateUrl: './skdo-chart.component.html',
  styleUrls: ['./skdo-chart.component.scss']
})
export class SkdoChartComponent implements OnInit {
  private chart: any;
  // @Input() data: any;

  ngOnInit() {
    this.chart = this.AmCharts.makeChart('skdo', {
      "type": "serial",
      "categoryField": "category",
      "autoMarginOffset": 40,
      "color": "#FF0000",
      "marginRight": 60,
      "marginTop": 60,
      "startDuration": 1,
      "fontSize": 13,
      "theme": "black",
      "categoryAxis": {
        "gridPosition": "start"
      },
      "trendLines": [],
      "graphs": [
        {
          "accessibleLabel": "",
          "labelOffset": 7,
          "animationPlayed": true,
          "balloonColor": "undefined",
          "bullet": "round",
          "bulletSize": 10,
          "fillColors": "undefined",
          "gapPeriod": 0,
          "id": "AmGraph-1",
          "lineAlpha": 1,
          "lineColor": "#FF8000",
          "lineThickness": 3,
          "title": "graph 1",
          "type": "smoothedLine",
          "valueField": "column-1",
          "labelText": "[[value]]",
        },
        {
          "accessibleLabel": "",

          "bullet": "round",
          "animationPlayed": true,
          "bulletColor": "#FF0000",
          "bulletSize": 20,
          "id": "AmGraph-2",
          "lineColor": "#FF8000",
          "lineThickness": 3,
          "title": "graph 2",
          "type": "smoothedLine",
          "valueField": "column-2"
        },
        {
          "accessibleLabel": "",
          "labelOffset": 7,
          "behindColumns": true,
          "bullet": "round",
          "animationPlayed": true,
          "fillColors": "undefined",
          "id": "AmGraph-3",
          "lineColor": "#FF8000",
          "lineThickness": 3,
          "title": "graph 3",
          "type": "smoothedLine",
          "valueField": "column-3",
          "labelText": "[[value]]",
        }
      ],
      "guides": [],
      "valueAxes": [
        {
          "id": "ValueAxis-1",
          "title": ""
        }
      ],
      "allLabels": [],
      "balloon": {},
      "titles": [],
      "dataProvider": [
        {
          "category": "category 1",
          "column-1": "1",
          "column-2": "q",
          "column-3": "q"
        },
        {
          "category": "category 2",
          "column-1": "2",
          "column-2": "q",
          "column-3": "q"
        },
        {
          "category": "category 3",
          "column-1": "3",
          "column-2": "3",
          "column-3": "q"
        },
        {
          "category": "category 4",
          "column-1": "ert",
          "column-2": "4",
          "column-3": "4"
        },
        {
          "category": "category 5",
          "column-1": "ert",
          "column-2": "q",
          "column-3": "5"
        },
        {
          "category": "category 6",
          "column-1": "ert",
          "column-2": "q",
          "column-3": "6"
        },
        {
          "category": "category 7",
          "column-1": "w",
          "column-2": "q",
          "column-3": "7"
        }
      ]
    });
  }

  constructor(private AmCharts: AmChartsService) {
  }
}
