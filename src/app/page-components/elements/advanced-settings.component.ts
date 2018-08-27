import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RepoService} from '../../services/repo.service';
import set = Reflect.set;
import {SendService} from '../../services/send.service';


@Component({
  selector: 'advanced-settings',
  template: `
    <table class="table table-bordered mb-0">
      <thead>
      <tr>
        <th>Название</th>
        <th>Значение</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let datasource of data">
        <td width="50%">{{datasource.name}}</td>
        <td *ngIf="!editable">{{datasource.value}}</td>
        <td *ngIf="editable"><input type="text" class="form-control" [(ngModel)]="datasource.value" value="{{datasource.value}}"/></td>
      </tr>
      </tbody>
    </table>
    <br>
    <button type="button" *ngIf="!editable" class="btn btn btn-outline-info btn-block" (click)="change()">Изменить</button>
    <button type="button" *ngIf="editable" class="btn btn-outline-success btn-block" (click)="save()">Сохранить</button>
    <button type="button" *ngIf="editable" class="btn btn-outline-danger btn-block" (click)="cancel()">Отменить</button>
  `
})
export class AdvancedSettingsComponent implements OnInit {
  editable = false;
  @Output()
  uploaded = new EventEmitter<string>();

  constructor(private repo: RepoService, private send: SendService) {
  }

  get data() {
    return this.repo.settings_advanced;
  }

  ngOnInit() {
  }

  change(): void {
    this.editable = true;
  }

  save(): void {
    this.editable = false;
    this.send.updateadvancedsettings();
  }

  cancel(): void {
    this.editable = false;
    this.uploaded.emit();
  }
}
