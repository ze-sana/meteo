import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBarComponent } from './choose-bar.component';

describe('ChooseBarComponent', () => {
  let component: ChooseBarComponent;
  let fixture: ComponentFixture<ChooseBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
