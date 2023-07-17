import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatIconModule } from "@angular/material/icon";

const MATERIAL: any[] = [MatIconModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, MATERIAL],
  exports: [MATERIAL],
})
export class MaterialModule {}
