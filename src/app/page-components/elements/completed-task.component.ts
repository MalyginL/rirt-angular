import {Component, Input, OnInit} from '@angular/core';
import {RepoService} from '../../services/repo.service';


@Component({
  selector: 'completed-table',
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Completed tasks</h4>
        <table class="table table-bordered mb-0">
          <thead>
          <th>Период</th>
          <th>Задание</th>
          <tbody>
          <ng-container *ngFor="let data of dataSource">
            <tr *ngIf="data.channel===channel">
              <td>{{data.task}}</td>
              <td>{{data.time}}</td>
            </tr>
          </ng-container>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class CompletedTaskComponent implements OnInit {

  constructor(private repo: RepoService) {
  }

  get dataSource() {
    return this.repo.tasks_oldtasks;
  }

  get channel() {
    return this.repo.task_selected_channel;
  }

  ngOnInit() {
  }
}
