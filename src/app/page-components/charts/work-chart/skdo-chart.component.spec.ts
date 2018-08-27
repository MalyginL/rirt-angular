import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkdoChartComponent } from './skdo-chart.component';

describe('CorrectionPageComponent', () => {
  let component: SkdoChartComponent;
  let fixture: ComponentFixture<SkdoChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkdoChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkdoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
