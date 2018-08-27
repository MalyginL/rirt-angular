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
      'type': 'serial',
      'categoryField': 'time',
      'dataDateFormat': 'YYYY-MM-DD HH:NN:SS',
      'categoryAxis': {
        'minPeriod': 'ss',
        'parseDates': true
      },
      'chartCursor': {
        'enabled': true,
        'categoryBalloonDateFormat': 'YYYY-MM-DD JJ:NN:SS'
      },
      'chartScrollbar': {
        'enabled': true
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
          'title': 'Axis title'
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
    
    
    
    
    
    /*{
      'color': '#FF0D0D',
      'type': 'serial',
      'theme': 'dark',
      'marginTop': 0,
      'marginRight': 80,
      'dataProvider': changes.data.currentValue,
      'valueAxes': [{
        'axisAlpha': 0,
        'position': 'left'
      }],
      'graphs': [{
        'id': 'g1',
        'balloonText': '[[category]]<br><b><span style=\'font-size:14px;\'>[[value]]</span></b>',
        'bullet': 'round',
        'bulletSize': 8,
        'lineColor': '#d1655d',
        'lineThickness': 2,
        'negativeLineColor': '#637bb6',
        'type': 'smoothedLine',
        'valueField': 'rawData'
      }],
      'chartCursor': {
        'categoryBalloonDateFormat': 'YYYY-MM-DD HH:MM:SS',
        'cursorAlpha': 0,
        'valueLineEnabled': true,
        'valueLineBalloonEnabled': true,
        'valueLineAlpha': 0.5,
        'fullWidth': true
      },
      'dataDateFormat': 'YYYY-MM-DD HH:MM:SS',
      'categoryField': 'time',
      'categoryAxis': {
        'minPeriod': 'ss',
        'parseDates': true,
        'dashLength':1,
        'minorGridAlpha': 0.1,
        'minorGridEnabled': true
      },
      'export': {
        'enabled': true
      }
    });
  }*/


  constructor(private AmCharts: AmChartsService) {
  }
}
