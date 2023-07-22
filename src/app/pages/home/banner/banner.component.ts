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

  bannerIndex: number = 0;

  ngOnInit(): void {
    this.onCarouselInit()
  }

  onCarouselInit(){
    setInterval(() => {
      this.bannerIndex ++

      if(this.bannerIndex >= this.banners.length){
        this.bannerIndex = 0
      }

    }, 4000)
  }

  nextSlideBanner(){
    this.bannerIndex++

    if(this.bannerIndex >= this.banners.length){
      this.bannerIndex = 0;
    }
  }

  previousSlideBanner(){
    this.bannerIndex--

    if(this.bannerIndex < 0){
      this.bannerIndex = this.banners.length - 1
    }
  }


  onChangeImage(): string{
    if(this.bannerIndex == 0){
      return `translateX(0)`
    } else if(this.bannerIndex == 1){
      return `translateX(-100%)`
    } else if(this.bannerIndex == 2){
      return `translateX(-200%)`
    }
    return `translateX(0)`
  }
}
