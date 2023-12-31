import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-benefits></app-benefits>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}
