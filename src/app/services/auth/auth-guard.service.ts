import {Injectable} from '@angular/core';
import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {OauthService} from './oauth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  defaulturl = '/home';

  get status() {
    return this.auth.isAuth;
  }

  constructor(public auth: OauthService, public router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.defaulturl = state.url;
    if (this.status) {
      return true;
    }
    
    this.auth.redirectUrl = this.defaulturl;
    this.router.navigate(['/login']);
    return false;
  }
}
