import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LnadingPageComponent } from './lnading-page.component';

describe('LnadingPageComponent', () => {
  let component: LnadingPageComponent;
  let fixture: ComponentFixture<LnadingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LnadingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LnadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
