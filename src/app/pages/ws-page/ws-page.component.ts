import {Component, OnInit} from '@angular/core';
import {RepoService} from '../../services/repo.service';
import {StompService} from 'ng2-stomp-service';
import { WS } from '../../models/ws';


@Component({
  selector: 'ws-page',
  templateUrl: './ws-page.component.html',
  styleUrls: ['./ws-page.component.scss'],
})
export class WsPageComponent implements OnInit {

  private sub:any;
  private response:any;
  private stomp:StompService; 
  ws: WS = new WS;

  constructor(private repo: RepoService, stomp:StompService) {
  
  }

  connect( stomp:StompService,repo: RepoService){
    stomp.configure({
      host:this.repo.WSserverURL,
      debug:true,
      queue:{'init':false}
    });
    stomp.startConnect().then(()=>stomp.done('init'));
    console.log('connected');
    this.stomp=stomp;

  }

  private send(text:any){

this.stomp
  }





  
  
  ngOnInit() {
  }

}








