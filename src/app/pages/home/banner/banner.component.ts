import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit {
  banners = [
    "assets/img/banner-header.png",
    "assets/img/banner-header.png",
    "assets/img/banner-header.png",
  ];

  bannerTranslatePos: number = 0;
  bannerIndex: number = 0;

  ngOnInit(): void {
    this.onCarouselInit()
  }

  onCarouselInit(){
    setInterval(() => {
      this.bannerIndex ++
      this.bannerTranslatePos+= 100;

      if(this.bannerIndex >= this.banners.length){
        this.bannerIndex = 0
        this.bannerTranslatePos = 0;
      }

    }, 4000)
  }

  nextSlideBanner(){

  }

  previousSlideBanner(){

  }
}
