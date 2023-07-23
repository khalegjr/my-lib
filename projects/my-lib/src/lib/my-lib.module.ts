import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { ButtonComponent } from "./button/button.component";
import { MyLibComponent } from "./my-lib.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";

@NgModule({
  declarations: [MyLibComponent, ButtonComponent, ProgressBarComponent],
  imports: [MatButtonModule, MatProgressBarModule],
  exports: [MyLibComponent],
})
export class MyLibModule {}
