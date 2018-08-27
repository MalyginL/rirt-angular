import {Component} from '@angular/core';
import {OauthService} from '../services/auth/oauth.service';


@Component({
  selector: 'def-layout',
  templateUrl: 'defLayout.component.html',
})
export class defLayoutComponent {

  togglestatus = false;

  constructor(private auth: OauthService) {
  }

  toggleSidebar() {
    const z: any = document.querySelector('aside');
    this.togglestatus = true;
    z.classList.toggle('toggled');

  }

  logout() {
    this.auth.logout();
  }
}
