import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/Rx';
import {RepoService} from './repo.service';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class LoadService {

  get url() {
    return this.repo.backendUrl;
  }

  get token() {
    return this.repo.access_token;
  }

  constructor(private _http: HttpClient, private repo: RepoService) {
  }

  load(path: string) {
    const headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'})
      .append('Authorization', 'Bearer ' + this.token);
    return this._http.get(this.url + path, {headers: headers});
  }

  // home page

  load_home_graph() {
    return this.load('/malygin/maingraphdatasource');
  }

  load_graph(channel: number) {
    return this.load('/malygin/getGraph/' + channel);
  }

  load_home_titlebox() {
    return this.load('/malygin/headerboxes');
  }

  load_home_status() {
    return this.load('/malygin/postatus');
  }

  // setting page

  load_settings_main() {
    return this.load('/malygin/mainsettings');
  }

  load_settings_advanced() {
    return this.load('/malygin/advancessettings');
  }

  // task page

  load_task() {
    return this.load('/malygin/tasks');
  }

  load_old_task() {
    return this.load('/malygin/oldtasks');
  }

 


  /*    NEW      API */

  load_GraphsPerChannel(device,channel,time,type){
    
    return this.load('/malygin/getGraphsPerChannel/'+device+'/'+"2"+'/'+time+type);
  }
  load_devices() {
    return this.load('/malygin/devices');
  }

  load_channels( device) {
    return this.load('/malygin/channels/'+device);
  }
}
