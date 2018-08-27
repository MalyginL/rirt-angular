import {NgModule} from '@angular/core';
import {ShortBlockComponent} from './elements/short-block.component';
import {EtalonSVGComponent} from './elements/svg.component';
import {ProgramStatusComponent} from './elements/program-status.component';
import {SmoothedChartComponent} from './charts/smoothed-chart/smoothed-chart.component';
import {NgSelectorChannelComponent} from './elements/ng-selector-channel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgSelectModule} from '@ng-select/ng-select';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {NewTaskComponent} from './elements/new-task.component';
import {LineChartComponent} from './charts/line-chart/line-chart.component';
import {MainSettingsComponent} from './elements/main-settings.component';
import {CurrentTasksComponent} from './elements/current-tasks.component';
import {AdvancedSettingsComponent} from './elements/advanced-settings.component';
import {CompletedTaskComponent} from './elements/completed-task.component';
import {SkdoChartComponent} from './charts/work-chart/skdo-chart.component';
import {GraphTableComponent} from './elements/graph-table.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  declarations: [
    LineChartComponent,
    NgSelectorChannelComponent,
    ShortBlockComponent,
    EtalonSVGComponent,
    ProgramStatusComponent,
    SmoothedChartComponent,
    NewTaskComponent,
    MainSettingsComponent,
    CurrentTasksComponent,
    AdvancedSettingsComponent,
    GraphTableComponent,
    CompletedTaskComponent,
    SkdoChartComponent,
  ],
  exports: [
    LineChartComponent,
    GraphTableComponent,
    NgSelectorChannelComponent,
    NewTaskComponent,
    ShortBlockComponent,
    EtalonSVGComponent,
    ProgramStatusComponent,
    SmoothedChartComponent,
    MainSettingsComponent,
    CurrentTasksComponent,
    AdvancedSettingsComponent,
    CompletedTaskComponent,
    SkdoChartComponent
  ],
})
export class PageComponentsModule {
}
