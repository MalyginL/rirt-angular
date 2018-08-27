import {Component, Input, OnInit} from '@angular/core';
import {RepoService} from '../../services/repo.service';
import {SendService} from '../../services/send.service';


@Component({
  selector: 'current-table',
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Текущие задания</h4>
        <table class="table table-bordered mb-0">
          <thead>
          <th>Период</th>
          <th>Задание</th>
          <th>Отмена</th>
          <tbody>
          <ng-container *ngFor="let data of dataSource">
            <tr *ngIf="data.channel===channel">
              <td>{{data.time}}</td>
              <td>{{data.task}}</td>
              <td width="10%"><a (click)="remove(data.id)" style="color:red">Отменить </a></td>
            </tr>
          </ng-container>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class CurrentTasksComponent implements OnInit {

  constructor(private repo: RepoService, private send: SendService) {
  }

  get dataSource() {
    return this.repo.tasks_tasks;
  }

  get channel() {
    return this.repo.task_selected_channel;
  }

  ngOnInit() {
  }

  remove(id: number): void {
    this.send.removetask(id);
  }

}
