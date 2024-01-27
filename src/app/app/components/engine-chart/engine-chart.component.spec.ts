import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineChartComponent } from './engine-chart.component';

describe('EngineChartComponent', () => {
  let component: EngineChartComponent;
  let fixture: ComponentFixture<EngineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
