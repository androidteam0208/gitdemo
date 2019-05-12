import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoItemPhoneComponent } from './demo-item-phone.component';

describe('DemoItemPhoneComponent', () => {
  let component: DemoItemPhoneComponent;
  let fixture: ComponentFixture<DemoItemPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoItemPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoItemPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
