import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothedChartComponent } from './smoothed-chart.component';

describe('CorrectionPageComponent', () => {
  let component: SmoothedChartComponent;
  let fixture: ComponentFixture<SmoothedChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothedChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
