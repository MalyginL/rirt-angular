import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import {
  AuthGuardService as AuthGuard
} from './services/auth/auth-guard.service';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {TaskPageComponent} from './pages/task-page/task-page.component';
import {PageComponentsModule} from './page-components/page-components.module';
import {OauthService} from './services/auth/oauth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule, routes} from './app-routing.module';
import {defLayoutComponent} from './layout/defLayout.component';
import {LoadService} from './services/load.service';
import {RepoService} from './services/repo.service';
import {SendService} from './services/send.service';
import {WikiPageComponent} from './pages/wiki-page/wiki-page.component';
import {NotfoundPageComponent} from './pages/notfound-page/notfound-page.component';
import {WorkPageComponent} from './pages/work-page/work-page.component';
import {CorrectionPageComponent} from './pages/correction-page/correction-page.component';
import {EtalonPageComponent} from './pages/etalon-page/etalon-page.component';
import {StompService} from 'ng2-stomp-service';
import {WsPageComponent} from './pages/ws-page/ws-page.component';



@NgModule({
  declarations: [
    WikiPageComponent,
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    SettingsPageComponent,
    TaskPageComponent,
    defLayoutComponent,
    NotfoundPageComponent,
    WorkPageComponent,
    CorrectionPageComponent,
    EtalonPageComponent,
    WsPageComponent,
  ],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false
      // , enableTracing: true
    }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PageComponentsModule,
    HttpClientModule,
    AmChartsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [OauthService, AuthGuard, LoadService, RepoService, SendService, StompService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
