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
  import {graphAsk} from '../../models/graphAsk';
  
  
  @Component({
    selector: 'ng-selector-device',
    template: `
    <form [formGroup]="graphAsk" (ngSubmit)="save(graphAsk)">
 
        <ng-select [items]=""
                   [(ngModel)]="selectedDevice"
                   [selectOnTab]="true"
                   bindValue="device"
                   bindLabel="device"
                   [clearable]="false"
                   (ngModelChange)="confirmDevice()"
                   placeholder="Choose device"
                   formControlName="device">
        </ng-select>
  
      <ng-select [items]=""
                 [(ngModel)]="selectedChannel"
                 [selectOnTab]="true"
                 bindValue="channel"
                 bindLabel="channel"
                 [clearable]="false"
                 (ngModelChange)="confirmChannel()"
                 placeholder="Choose channel"
                 formControlName="channel">
      </ng-select>
     

     
      <input [owlDateTimeTrigger]="dt1"
             [owlDateTime]="dt1"
             [selectMode]="'range'"
             formControlName="time"
             class="form-control"
             placeholder="Выберите время">
      <owl-date-time #dt1></owl-date-time>
      <br>
      
      <button type="submit" class="btn btn-outline-success btn-block">Показать</button>
    </form>
    `
  })
  
  
  export class NgSelectorDeviceComponent implements OnInit {
   /* graphAsk: graphAsk = new graphAsk;*/
   options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };


    graphAsk: FormGroup;
    selectedDevice: any = 1;
    selectedChannel: any = 1;
    send: graphAsk = new graphAsk;

    constructor(private _fb: FormBuilder, private repo: RepoService, private load: LoadService) {
    }
  
    ngOnInit() {
      this.load.load_settings_main().subscribe(settings => this.repo.settings_main = settings);
      this.graphAsk = this._fb.group({
        device: ['', [Validators.required]],
        channel: ['', [Validators.required]],
        time: ['', [Validators.required]]
      });
    }
  
    confirmDevice(){

    }


    confirmChannel() {
      
    }
    
    save(graphAsk){
      new Date(graphAsk.value.time[0]).getTime();
      this.load.load_GraphsPerChannel(graphAsk.value.device,graphAsk.value.channel,   new Date(graphAsk.value.time[0]).getTime() +
      '~' +  new Date(graphAsk.value.time[1]).getTime(),'/pd').subscribe(result=>this.repo.info_pd=result);
      this.load.load_GraphsPerChannel(graphAsk.value.device,graphAsk.value.channel,  new Date(graphAsk.value.time[0]).getTime() +
      '~' +  new Date(graphAsk.value.time[1]).getTime(),'/rfd').subscribe(result=>this.repo.info_rel_freq_diff=result);
      this.load.load_GraphsPerChannel(graphAsk.value.device,graphAsk.value.channel,   new Date(graphAsk.value.time[0]).getTime() +
      '~' +  new Date(graphAsk.value.time[1]).getTime(),'/cvrfq').subscribe(result=>this.repo.info_curr_var_rel_freq_diff=result);
    }

    get data() {
      return this.repo.settings_main;
    }
  
  }
  