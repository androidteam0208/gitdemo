import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoItemLapComponent } from './demo-item-lap.component';

describe('DemoItemLapComponent', () => {
  let component: DemoItemLapComponent;
  let fixture: ComponentFixture<DemoItemLapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoItemLapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoItemLapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
