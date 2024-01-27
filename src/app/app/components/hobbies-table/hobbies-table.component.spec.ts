import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesTableComponent } from './hobbies-table.component';

describe('HobbiesTableComponent', () => {
  let component: HobbiesTableComponent;
  let fixture: ComponentFixture<HobbiesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
