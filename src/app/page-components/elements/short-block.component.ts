import {Component, OnInit} from '@angular/core';
import {RepoService} from '../../services/repo.service';


@Component({
  selector: 'short-block',
  template: `
    <div class="row quick-stats">
      <div class="col-sm-6 col-md-3" *ngFor="let box of data">
        <div class="quick-stats__item">
          <div class="quick-stats__info">
            <h2>{{box.title}}</h2>
            <small>{{box.value}}</small>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ShortBlockComponent implements OnInit {
  constructor(private repo: RepoService) {
  }

  get data() {
    return this.repo.home_titlebox;
  }

  ngOnInit() {
  }
}
