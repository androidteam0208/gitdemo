import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { DemoHeaderComponent } from './demo-header/demo-header.component';
import { DemoBannerComponent } from './demo-banner/demo-banner.component';
import { DemoFooterComponent } from './demo-footer/demo-footer.component';
import { DemoListLapComponent } from './demo-list-lap/demo-list-lap.component';
import { DemoListPhoneComponent } from './demo-list-phone/demo-list-phone.component';
import { DemoItemLapComponent } from './demo-item-lap/demo-item-lap.component';
import { DemoItemPhoneComponent } from './demo-item-phone/demo-item-phone.component';

@NgModule({
  declarations: [DemoComponent, DemoHeaderComponent, DemoBannerComponent, DemoFooterComponent, DemoListLapComponent, DemoListPhoneComponent, DemoItemLapComponent, DemoItemPhoneComponent],
  
  exports:[DemoComponent, DemoHeaderComponent, DemoBannerComponent, DemoFooterComponent, DemoListLapComponent, DemoListPhoneComponent, DemoItemLapComponent, DemoItemPhoneComponent],
  imports: [
    CommonModule 
  ]
})
export class DemoModule { }
