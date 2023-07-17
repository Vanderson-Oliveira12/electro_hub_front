import { Component } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent {

  banners = ["assets/img/banner-header.png", "assets/img/banner-header.png", "assets/img/banner-header.png"]

  showNavigationIndicators = false;
}
