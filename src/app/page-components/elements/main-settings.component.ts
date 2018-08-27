import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RepoService} from '../../services/repo.service';
import {SendService} from '../../services/send.service';


@Component({
  selector: 'main-settings',
  template: `
    <table class="table table-bordered mb-0">
      <thead>
      <tr>
        <th>Канал</th>
        <th>Название</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let datasource of data">
        <td width="10%">{{datasource.channel}}</td>
        <td *ngIf="!editable">{{datasource.device_name}}</td>
        <td *ngIf="editable"><input type="text" class="form-control" [(ngModel)]="datasource.device_name"
                                    value="{{datasource.device_name}}"/></td>
      </tr>
      </tbody>
    </table>
    <br>
    <button type="button" *ngIf="!editable" class="btn btn btn-outline-info btn-block" (click)="change()">Изменить</button>
    <button type="button" *ngIf="editable" class="btn btn-outline-success btn-block" (click)="save()">Сохранить</button>
    <button type="button" *ngIf="editable" class="btn btn-outline-danger btn-block" (click)="cancel()">Отменить</button>
  `
})
export class MainSettingsComponent implements OnInit {
  editable = false;

  constructor(private repo: RepoService, private send: SendService) {
  }

  @Output()
  uploaded = new EventEmitter<string>();


  get data() {
    return this.repo.settings_main;
  }

  ngOnInit() {
  }

  change(): void {
    this.editable = true;
  }

  save(): void {
    this.editable = false;
    this.send.updatemainssettings();
  }

  cancel(): void {
    this.editable = false;
    this.uploaded.emit();
  }
}
