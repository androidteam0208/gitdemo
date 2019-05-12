import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoListPhoneComponent } from './demo-list-phone.component';

describe('DemoListPhoneComponent', () => {
  let component: DemoListPhoneComponent;
  let fixture: ComponentFixture<DemoListPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoListPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoListPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
