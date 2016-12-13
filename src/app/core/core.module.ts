import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent]
})
export class CoreModule {
  // 核心模块只允许导入一次,并且只能AppModule进行导入
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
