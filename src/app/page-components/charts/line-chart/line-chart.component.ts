import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AmChartsService} from '@amcharts/amcharts3-angular';


@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnChanges {
  private chart: any;
  @Input() data: any;

  constructor(private AmCharts: AmChartsService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.chart = this.AmCharts.makeChart('line-chart-simple', {
      'type': 'serial',
      'categoryField': 'date',
      'dataDateFormat': 'YYYY-MM-DD',
      'autoMarginOffset': 40,
      'marginRight': 60,
      'marginTop': 60,
      'fontSize': 13,
      'theme': 'light',
      'categoryAxis': {
        'parseDates': true
      },
      'titles': [
        {
          'text': 'Относительная нестабильность частоты',
          'color': 'white'
        }],
      'chartCursor': {
        'enabled': true
      },
      'legend': {
        'color': '#fdfbff',
        'enabled': true
      },
      'trendLines': [],
      'graphs': [
        {
          'columnWidth': 0.44,
          'cornerRadiusTop': 0,
          'dashLength': 4,
          'fillAlphas': 0.1,
          'id': 'AmGraph-1',
          'lineAlpha': 0.44,
          'title': 'Расчетное отклонение',
          'type': 'column',
          'valueField': 'result'
        },
        {
          'bullet': 'round',
          'bulletBorderAlpha': 1,
          'bulletBorderThickness': 1,
          'bulletSize': 10,
          'id': 'AmGraph-2',
          'lineThickness': 3,
          'title': 'Ожидаемая коррертировка',
          'valueField': 'correction'
        }
      ],
      'guides': [],
      'valueAxes': [
        {
          'id': 'ValueAxis-1',
          'title': ''
        }
      ],
      'allLabels': [],
      'balloon': {},
      'dataProvider': changes.data.currentValue,
    });
  }
}
