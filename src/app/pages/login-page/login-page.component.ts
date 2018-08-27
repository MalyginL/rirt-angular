import {Component, OnInit} from '@angular/core';
import {OauthService} from '../../services/auth/oauth.service';
import {User} from '../../models/user';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  message: string = this.oauth.authMessage;
  user: User = new User;
  visible = false;

  constructor(private oauth: OauthService, public router: Router) {
  }

  ngOnInit() {

    this.oauth.validate().subscribe((data) => {
      if (!data) {
        this.visible = true;
      } else {
        this.router.navigate([this.oauth.redirectUrl]);
        this.visible = false;
      }
    });
  }

  auth(): void {
    this.oauth.auth(this.user.login, this.user.password).subscribe(res => {
      if (res) {
        this.router.navigate([this.oauth.redirectUrl]);
      } else {
        this.message = this.oauth.authMessage;
      }
    });
  }
}
