import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtalonPageComponent } from './etalon-page.component';

describe('CorrectionPageComponent', () => {
  let component: EtalonPageComponent;
  let fixture: ComponentFixture<EtalonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtalonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtalonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
