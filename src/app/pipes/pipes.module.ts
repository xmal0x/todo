import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReversePipe } from "./ReversePipe.pipe";

@NgModule({
  declarations: [ReversePipe],
  imports: [CommonModule],
  exports: [ReversePipe]
})
export class PipesModule {}
