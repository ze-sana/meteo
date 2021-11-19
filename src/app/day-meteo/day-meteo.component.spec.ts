import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayMeteoComponent } from './day-meteo.component';

describe('DayMeteoComponent', () => {
  let component: DayMeteoComponent;
  let fixture: ComponentFixture<DayMeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayMeteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
