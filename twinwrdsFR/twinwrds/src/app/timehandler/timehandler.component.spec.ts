import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimehandlerComponent } from './timehandler.component';

describe('TimehandlerComponent', () => {
  let component: TimehandlerComponent;
  let fixture: ComponentFixture<TimehandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimehandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimehandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
