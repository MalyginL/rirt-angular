import {Injectable} from '@angular/core';


@Injectable()
export class RepoService {
  backendUrl = 'http://192.168.101.98:8080';

  WSserverURL='ws://192.168.101.98:8080';
  home_titlebox: any;
  home_status: any;
  settings_main: any;
  settings_advanced: any;
  task_selected_channel: any = 1;
  tasks_tasks: any;
  tasks_oldtasks: any;
  access_token: any;
  refresh_token: any;
  task_graph: any;

  constructor() {
    this.access_token = localStorage.getItem('access_token');
    this.refresh_token = localStorage.getItem('refresh_token');
  }
}
