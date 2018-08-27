import {
  NgModule,
  Component,
  Pipe,
  OnInit, Input
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {NgOption} from '@ng-select/ng-select';
import {RepoService} from '../../services/repo.service';
import {LoadService} from '../../services/load.service';


@Component({
  selector: 'ng-selector-channel',
  template: `
    <div [formGroup]="channel">
      <ng-select [items]="data"
                 [(ngModel)]="selectedItem"
                 [selectOnTab]="true"
                 bindValue="channel"
                 bindLabel="device_name"
                 [clearable]="false"
                 (ngModelChange)="showConfirm()"
                 placeholder="Choose channel"
                 formControlName="ch">
      </ng-select>
    </div>
  `
})


export class NgSelectorChannelComponent implements OnInit {

  channel: FormGroup;
  selectedItem: any = 1;

  constructor(private _fb: FormBuilder, private repo: RepoService, private load: LoadService) {
  }

  ngOnInit() {
    this.load.load_settings_main().subscribe(settings => this.repo.settings_main = settings);
    this.channel = this._fb.group({
      ch: ['', [Validators.required]]
    });
  }

  showConfirm() {
    this.load.load_graph(this.selectedItem).subscribe(data => {
      this.repo.task_graph = data;
    });
    this.repo.task_selected_channel = this.selectedItem;
  }

  get data() {
    return this.repo.settings_main;
  }

}
