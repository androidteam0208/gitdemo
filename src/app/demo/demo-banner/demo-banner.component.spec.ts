import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBannerComponent } from './demo-banner.component';

describe('DemoBannerComponent', () => {
  let component: DemoBannerComponent;
  let fixture: ComponentFixture<DemoBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
