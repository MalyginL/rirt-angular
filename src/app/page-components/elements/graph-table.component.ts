import {Component, Input, OnInit} from '@angular/core';
import {RepoService} from '../../services/repo.service';
import {SendService} from '../../services/send.service';
import { LoadService } from '../../services/load.service';


@Component({
  selector: 'graph-table',
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Данные графика</h4>
        <table class="table table-bordered mb-0">
          <thead>
          <th>Ось Ординат</th>
          <th>Ось Абсцисс</th>
          <tbody>
          <tr *ngFor="let box of data">
              <td>{{box.x}}</td>
              <td>{{box.y}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class GraphTableComponent implements OnInit {
  timer: any;
  @Input() data: any;

  constructor(private repo: RepoService, private send: SendService,private load:LoadService) {
    
  }


  ngOnInit() {
    /*
    this.load.load_home_graph().subscribe(data => {
      this.data = data;
    });*/
  }

}
