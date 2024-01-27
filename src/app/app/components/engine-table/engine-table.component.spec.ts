import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineTableComponent } from './engine-table.component';

describe('EngineTableComponent', () => {
  let component: EngineTableComponent;
  let fixture: ComponentFixture<EngineTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
