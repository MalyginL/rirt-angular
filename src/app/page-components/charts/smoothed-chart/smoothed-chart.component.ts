import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {AmChartsService} from '@amcharts/amcharts3-angular';
import { DatePipe } from '../../../../../node_modules/@angular/common';


@Component({
  selector: 'smoothed-chart',
  templateUrl: './smoothed-chart.component.html',
  styleUrls: ['./smoothed-chart.component.scss']
})
export class SmoothedChartComponent implements OnChanges {
  private chart: any;
  @Input() data: any;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.data.currentValue);
    this.chart = this.AmCharts.makeChart('smoothed', 
    {
      'pathToImages': 'assets/images/',
      'type': 'serial',
      'categoryField': 'time',
      'dataDateFormat': 'YYYY-MM-DD HH:NN:SS',
      'color':'red',
      'categoryAxis': {
        'minPeriod': 'ss',
        'parseDates': true
      },
      'chartCursor': {
        'enabled': true,
        'categoryBalloonDateFormat': 'YYYY-MM-DD JJ:NN:SS'
      },
      'chartScrollbar': {
        'enabled': true,
         'backgroundAlpha':0,
      },
      'trendLines': [],
      'graphs': [
        {
          'bullet': 'round',
          'id': 'AmGraph-1',
          'title': 'graph 1',
          'valueField': 'rawData'
        },
      ],
      'guides': [],
      'valueAxes': [
        {
          'id': 'ValueAxis-1',
        }
      ],
      'allLabels': [],
      'balloon': {},
      'legend': {
        'enabled': false,
        'useGraphSettings': true
      },
      'titles': [
      ],
      'dataProvider':changes.data.currentValue,
    });
  }

  constructor(private AmCharts: AmChartsService) {
  }
}
