import { NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { MyLibComponent } from './my-lib.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [MyLibComponent, ButtonComponent, ProgressBarComponent],
  imports: [],
  exports: [MyLibComponent],
})
export class MyLibModule {}
