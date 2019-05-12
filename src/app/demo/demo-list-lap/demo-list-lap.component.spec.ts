import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoListLapComponent } from './demo-list-lap.component';

describe('DemoListLapComponent', () => {
  let component: DemoListLapComponent;
  let fixture: ComponentFixture<DemoListLapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoListLapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoListLapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
