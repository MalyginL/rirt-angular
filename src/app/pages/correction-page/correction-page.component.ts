import {Component, OnDestroy, OnInit} from '@angular/core';
import {AmChartsService} from '@amcharts/amcharts3-angular';
import {RepoService} from '../../services/repo.service';
import {LoadService} from '../../services/load.service';


@Component({
  selector: 'correction-page',
  templateUrl: './correction-page.component.html',
  styleUrls: ['./correction-page.component.scss']
})
export class CorrectionPageComponent implements OnInit, OnDestroy {

  timer: any;
  graphDataSource: any;

  get data() {
    return this.repo.task_graph;
  }

  constructor(private AmCharts: AmChartsService, private repo: RepoService, private load: LoadService) {
  }



  getDataSource() {
    this.load.load_home_graph().subscribe(data => {
      this.graphDataSource = data;
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






