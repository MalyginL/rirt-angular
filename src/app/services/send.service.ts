import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/Rx';
import {RepoService} from './repo.service';


@Injectable()
export class SendService {

  get token() {
    return this.repo.access_token;
  }

  get url() {
    return this.repo.backendUrl;
  }

  constructor(private _http: HttpClient, private repo: RepoService) {
  }

  send(path: string, data: any) {
    const headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'})
      .append('Authorization', 'Bearer ' + this.token);
    return this._http.post(this.url + path, data, {headers: headers});
  }

  // setting page
  updateadvancedsettings() {
    this.send('/malygin/updateadvancedsettings', this.repo.settings_advanced).subscribe(data => this.repo.settings_advanced = data);
  }

  updatemainssettings() {
    this.send('/malygin/updatemainssettings', this.repo.settings_main).subscribe(data => this.repo.settings_main = data);
  }

  // task
  addnewtask(data: any) {
    this.send('/malygin/addnewtask', data).subscribe(datasource => {this.repo.tasks_tasks = datasource
    console.log(datasource)});
  }

  removetask(id: number | string) {
    console.log(id);
    this.send('/malygin/removetask/' + id, this.repo.settings_main).subscribe(datasource => this.repo.tasks_tasks = datasource);
  }
}
