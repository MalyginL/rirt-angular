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
import { TryCatchStmt } from '../../../../node_modules/@angular/compiler';
  
  
  @Component({
    selector: 'ng-selector-device',
    template: `
    <form [formGroup]="graphAsk" (ngSubmit)="save(graphAsk)">
 <div class="card-group">
 <div class="col-3">
 <div class="card">
 <div class="card-block">
 
        <ng-select [items]="devices"
                   [(ngModel)]="selectedDevice"
                   [selectOnTab]="true"
                   bindValue="devices"
                   bindLabel="devices"
                   [clearable]="false"
                   (ngModelChange)="confirmDevice()"
                   placeholder="Choose device"
                   formControlName="device">
        </ng-select>
  </div>
  </div>
  </div>
  <div class="col-3">
  <div class="card">
  <div class="card-block">
      <ng-select [items]="channels"
                 [(ngModel)]="selectedChannel"
                 [selectOnTab]="true"
                 bindValue="selectedDevice"
                 bindLabel="selectedDevice"
                 [clearable]="false"
                 (change)="onChange($event.target.value)"
                 (ngModelChange)="confirmChannel()"
                 placeholder="Choose channel"
                 formControlName="channel">
      </ng-select>
     </div>
     </div>
     </div>
     <div class="col-3">
      <div class="card">
      <div class="card-block">
      <input [owlDateTimeTrigger]="dt1"
             [owlDateTime]="dt1"
             [selectMode]="'range'"
             formControlName="time"
             class="form-control"
             placeholder="Выберите время">
      <owl-date-time #dt1></owl-date-time>
      </div>
      </div>
      </div>
      <br>
      <div class="col-3">
      <div class="card">
      <div class="card-block">
      <button type="submit" class="btn btn-outline-success btn-block">Показать</button>
      </div>  
      </div>
      </div>
      </div>
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

    devices:any;
    channels:any;
    graphAsk: FormGroup;
    selectedDevice:any;
    selectedChannel: any;
    send: graphAsk = new graphAsk;

    constructor(private _fb: FormBuilder, private repo: RepoService, private load: LoadService) {
    }
  
    ngOnInit() {
     this.load.load_devices().subscribe(data=>this.devices=data)
      this.graphAsk = this._fb.group({
        device: ['', [Validators.required]],
        channel: ['', [Validators.required]],
        time: ['', [Validators.required]]
      });
    }
  
    confirmDevice(deviceValue){
      console.log(this.devices);
      if (this.selectedDevice){
        this.load.load_channels(this.selectedDevice).subscribe(data=>this.channels=data);
       console.log(this.channels);
      }
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
      console.log(this.repo.info_pd);
    }

    get data() {
      return this.repo.settings_main;
    }
  
  }
  