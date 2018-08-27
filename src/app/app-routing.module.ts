import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {AuthGuardService as AuthGuard} from './services/auth/auth-guard.service';

import {LoginPageComponent} from './pages/login-page/login-page.component';
import {TaskPageComponent} from './pages/task-page/task-page.component';
import {defLayoutComponent} from './layout/defLayout.component';
import {WikiPageComponent} from './pages/wiki-page/wiki-page.component';
import {NotfoundPageComponent} from './pages/notfound-page/notfound-page.component';
import {WorkPageComponent} from './pages/work-page/work-page.component';
import {CorrectionPageComponent} from './pages/correction-page/correction-page.component';
import {EtalonPageComponent} from './pages/etalon-page/etalon-page.component';
import { WsPageComponent } from './pages/ws-page/ws-page.component';


const defaultRoutes: Routes = [
  {path: 'wiki/:name', component: WikiPageComponent},
  {path: 'home', component: MainPageComponent },
  {path: 'etalon', component: EtalonPageComponent },
  {path: 'work', component: WorkPageComponent },
  {path: 'settings', component: SettingsPageComponent},
  {path: 'task', component: TaskPageComponent},
  {path: 'correction', component: CorrectionPageComponent},
  {path: 'ws', component: WsPageComponent},
];

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'malygin',
    component: defLayoutComponent,
    children: defaultRoutes,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: '**',
    component: NotfoundPageComponent
  }
];

@NgModule({
  imports: [],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule {}
