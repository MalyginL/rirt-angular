import {Component, OnInit} from '@angular/core';
import {RepoService} from '../../services/repo.service';


@Component({
  selector: 'program-status',
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Software Status</h4>
        <table class="table table-bordered mb-0">
          <tbody>
          <tr *ngFor="let table of data">
            <th scope="row">{{table.name}}</th>
            <td>{{table.status}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class ProgramStatusComponent implements OnInit {
  constructor(private repo: RepoService) {
  }

  ngOnInit() {
  }

  get data(): string {
    return this.repo.home_status;
  }

}
