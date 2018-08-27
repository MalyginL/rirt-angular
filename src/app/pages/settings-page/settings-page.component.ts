import {Component, OnInit} from '@angular/core';
import {RepoService} from '../../services/repo.service';
import {LoadService} from '../../services/load.service';

@Component({
  selector: 'settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {

  constructor(private load: LoadService, private repo: RepoService) {
  }

  getData() {
    this.load.load_settings_main().subscribe(data => {
      this.repo.settings_main = data;
    });
    this.load.load_settings_advanced().subscribe(data => {
      this.repo.settings_advanced = data;
    });
  }

  update() {
    this.getData();
  }
  
  ngOnInit() {
    this.getData();
  }

}








