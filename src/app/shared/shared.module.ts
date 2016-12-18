import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityModule } from '../utility/utility.module';
import { UiTreeComponent } from './uitree/uitree.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { SweetAlertService } from './sweet-alert/sweet-alert.service';
@NgModule({
  imports: [
    CommonModule,
    UtilityModule
  ],

  providers: [SweetAlertService],
  declarations: [UiTreeComponent, SweetAlertComponent],
  exports: [UiTreeComponent, SweetAlertComponent]
})
export class SharedModule { }
