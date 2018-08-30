import {Component, OnDestroy, OnInit} from '@angular/core';
import {AmChartsService} from '@amcharts/amcharts3-angular';
import {RepoService} from '../../services/repo.service';
import {LoadService} from '../../services/load.service';
import {Task_graph_data} from '../../models/task_page/Task_graph_data';


@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit, OnDestroy {

  timer: any;
  graphDataSource: any;
  time:String[]= [];
  phase_diff:String[]= [];
  rel_freq_diff:String[]= [];
  curr_var_rel_freq_diff:String[]= [];
  

  get data() {
    return this.repo.task_graph;
  }

  constructor(private AmCharts: AmChartsService, private repo: RepoService, private load: LoadService) {
  }



  getDataSource() {
   
    this.load.load_task_graph(1,1,'1~5').subscribe(data=>{
      (<Task_graph_data>data).graphCombo.forEach(x=>{
        this.time.push(x.time);
        this.phase_diff.push(x.phase_diff);
        this.rel_freq_diff.push(x.rel_freq_diff);
        this.curr_var_rel_freq_diff.push(x.curr_var_rel_freq_diff);
      })
     console.log( this.curr_var_rel_freq_diff);


      });

    this.load.load_task().subscribe(data => this.repo.tasks_tasks = data);

    this.load.load_old_task().subscribe(data => this.repo.tasks_oldtasks = data);
  }

  ngOnInit() {
    this.getDataSource();
    this.timer = setInterval(() => this.getDataSource(), 5000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }


}






