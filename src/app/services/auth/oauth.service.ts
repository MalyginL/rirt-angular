import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {RepoService} from '../repo.service';

interface loginresppwd {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: string;
  scope: string;
}

@Injectable()
export class OauthService {
  redirectUrl = '/malygin/home';
  isAuth = false;
  authMessage = 'Привет! Авторизуйся!';

  get url() {
    return this.repo.backendUrl;
  }

  get access_token() {
    return this.repo.access_token;
  }

  get refresh_token() {
    return this.repo.refresh_token;
  }

  constructor(private _http: HttpClient, private router: Router, private repo: RepoService) {
    setInterval(() => {
        if (this.isAuth) {
          this.validate()
            .subscribe(null, error => {
              if (!error) {
                   this.logout();
              }
            });
        }
      }, 5000);
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.repo.refresh_token = '';
    this.repo.access_token = '';
    this.isAuth = false;
    this.router.navigate(['/login']);
  }

  login(username: string, password: string) {
    this.auth(username, password).subscribe(rezult => {
      this.router.navigate([this.redirectUrl]);
      console.log(rezult);
    });
  }

  auth(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic ' + btoa('test:test'));
    return this._http.post<any>(this.url + '/oauth/token', 'grant_type=password&username=' + username + '&password=' + password, {headers: headers}).map(data => {
      if (data.access_token && data.refresh_token) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        this.repo.access_token = data.access_token;
        this.repo.refresh_token = data.refresh_token;
        this.isAuth = true;
        return true;
      } else {
        return false;
      }
    }).catch((err) => {
      if (err.status === 401) {
        this.authMessage = 'Неверное имя или пароль';
      }
      return Observable.of(false);
    });
  }

  validate(): Observable<boolean> {
    const headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'})
      .append('Authorization', 'Bearer ' + this.access_token);
    return this._http.get(this.url + '/malygin/validate', {headers: headers}).map(() => {

      this.isAuth = true;
      return true;
    }).catch(() => {
      return this.refreshtoken();
    });
  }

  refreshtoken(): Observable<boolean> {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
      .append('Authorization', 'Basic ' + btoa('test:test'));
    return this._http.post<loginresppwd>(this.url + '/oauth/token',
      'grant_type=refresh_token&refresh_token=' + this.refresh_token,
      {headers: headers}).map(data => {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      this.repo.access_token = data.access_token;
      this.repo.refresh_token = data.refresh_token;
      return true;
    }).catch(() => {
       this.logout();
      return Observable.of(false);
    });
  }
}
