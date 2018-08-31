import {Component, OnDestroy, OnInit} from '@angular/core';
import {AmChartsService} from '@amcharts/amcharts3-angular';
import {RepoService} from '../../services/repo.service';
import {LoadService} from '../../services/load.service';
import {Task_graph_data} from '../../models/task_page/Task_graph_data';
import {DatePipe} from'@angular/common';
import {ChartData} from '../../models/chartData'


@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit, OnDestroy {

  timer: any;
  graphDataSource: any;
  name_phase_diff:string="phase_diff"
  name_rel_freq_diff:string="rel_freq_diff"
  name_curr_var_rel_freq_diff:string="curr_var_rel_freq_diff"

  get data() {
    return this.repo.task_graph;
  }

  get phase_diff(){
    return this.repo.info_pd;
  }

  get rel_freq_diff(){
    return this.repo.info_rel_freq_diff;
  }

  get curr_var_rel_freq_diff(){
    return this.repo.info_curr_var_rel_freq_diff;
  }

  constructor(private AmCharts: AmChartsService, private repo: RepoService, private load: LoadService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }


}






