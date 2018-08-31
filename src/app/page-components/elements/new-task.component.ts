import { Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {NgOption} from '@ng-select/ng-select';
import {SendService} from '../../services/send.service';
import {RepoService} from '../../services/repo.service';
import {Task} from '../../models/task';


@Component({
  selector: 'new-task',
  template: `
    <h6>Создание заданий</h6>
   <form [formGroup]="tasks" (ngSubmit)="save(tasks)">
      <ng-select [items]="commands"
                 [selectOnTab]="true"
                 [clearable]="false"
                 bindLabel="name"
                 formControlName="task"
                 placeholder="Выберите команду">
      </ng-select>
    
      
      <input [owlDateTimeTrigger]="dt10"
             [owlDateTime]="dt10"
             [selectMode]="'range'"
             formControlName="time"
             class="form-control"
             placeholder="Выберите время">
      <owl-date-time #dt10></owl-date-time>
      <br>
      
      <button type="submit" class="btn btn-outline-success btn-block">Показать</button>
    </form>
  `
})


export class NewTaskComponent implements OnInit {
  options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  tasks: FormGroup;
  task: Task = new Task;

  constructor(private _fb: FormBuilder, private send: SendService, private repo: RepoService) {
  }

  commands: NgOption[] = [
    {id: 1, name: 'Относительная разность частот'},
    {id: 2, name: 'Сред. отклонение'},
    {id: 3, name: 'Сред. двухвыборочное отклонение'},
    {id: 4, name: 'Вариация Аллана'},
    {id: 5, name: 'Фильтрация по 3σ'}
  ];

  ngOnInit() {
    this.tasks = this._fb.group({
      task: [null, [Validators.required]],
      time: [null, [Validators.required]],
    });
  }

  save(tasks) {
    if (tasks.value.time && tasks.value.task.name) {
      this.task.channel = this.repo.task_selected_channel;
      this.task.time = tasks.value.time[0].toLocaleString('ru-RU', this.options) +
        '  ~  ' + tasks.value.time[1].toLocaleString('ru-RU', this.options);
      this.task.task = tasks.value.task.name;
      this.send.addnewtask(this.task);
    }
  }


}
