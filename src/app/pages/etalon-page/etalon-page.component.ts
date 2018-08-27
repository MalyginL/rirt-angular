import {Component, OnDestroy, OnInit} from '@angular/core';
import {AmChartsService} from '@amcharts/amcharts3-angular';
import {LoadService} from '../../services/load.service';
import {RepoService} from '../../services/repo.service';
import {DatePipe} from'@angular/common';


@Component({
  selector: 'etalon-page',
  templateUrl: './etalon-page.component.html',
  styleUrls: ['./etalon-page.component.scss']
})
export class EtalonPageComponent implements OnInit, OnDestroy {
  graphDataSource: any;
  timer: any;

  constructor(private AmCharts: AmChartsService, private load: LoadService, private repo: RepoService) {
  }

  getData() {
    this.load.load_home_graph().subscribe(data => {
      this.graphDataSource = data;
      const datePipe= new DatePipe('en-US');


      this.graphDataSource.forEach(element => {
        element.time=datePipe.transform(element.time*1000, 'yyyy-MM-dd HH:mm:ss');
      });
      console.log(this.graphDataSource);
    })
  ;






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







