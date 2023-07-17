import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { ContainerComponent } from "./container/container.component";
import { MaterialModule } from "../material/material.module";
import { FooterComponent } from "./footer/footer.component";

const COMPONENTS: any[] = [
  HeaderComponent,
  ContainerComponent,
  FooterComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports: [COMPONENTS],
})
export class ComponentsModule {}
