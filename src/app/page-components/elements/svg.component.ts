import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'svg-block',
  templateUrl: './svg.component.html',
})
export class EtalonSVGComponent implements OnInit {
  constructor(private route: Router) {
  }

  navigate(device: string) {
    this.route.navigate(['/malygin/wiki/' + device]);
  }

  ngOnInit() {
  }

}
