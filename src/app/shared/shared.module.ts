import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalertComponent } from './salert/salert.component';
import { UiTreeComponent } from './uitree/uitree.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SalertComponent, UiTreeComponent],
  exports: [SalertComponent, UiTreeComponent]
})
export class SharedModule { }
