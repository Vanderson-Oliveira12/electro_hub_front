import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { ContainerComponent } from "./container/container.component";
import { MaterialModule } from "../material/material.module";
import { FooterComponent } from "./footer/footer.component";
import { ProductCardComponent } from './product-card/product-card.component';
import { BenefitsComponent } from './benefits/benefits.component';

const COMPONENTS: any[] = [
  HeaderComponent,
  ContainerComponent,
  FooterComponent,
  ProductCardComponent,
  BenefitsComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports: [COMPONENTS],
})
export class ComponentsModule {}
