import {Component, OnDestroy, OnInit} from '@angular/core';
import {AmChartsService} from '@amcharts/amcharts3-angular';
import {LoadService} from '../../services/load.service';
import {RepoService} from '../../services/repo.service';


@Component({
  selector: 'work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit, OnDestroy {
  graphDataSource: any;
  timer: any;

  constructor(private AmCharts: AmChartsService, private load: LoadService, private repo: RepoService) {
  }

  getData() {
    this.load.load_home_graph().subscribe(data => {
      console.log(this.graphDataSource);
      this.graphDataSource = data;
    });
    this.load.load_home_titlebox().subscribe(data => {
      this.repo.home_titlebox = data;
    });
    this.load.load_home_status().subscribe(data => {
      this.repo.home_status = data;
    });
  }

  ngOnInit() {
    this.getData();
    this.timer = setInterval(() => this.getData(), 10000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}







