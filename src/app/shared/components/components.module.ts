import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { ContainerComponent } from "./container/container.component";
import { MaterialModule } from "../material/material.module";

const COMPONENTS: any[] = [HeaderComponent, ContainerComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports: [COMPONENTS],
})
export class ComponentsModule {}