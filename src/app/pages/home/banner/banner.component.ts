import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit {
  banners = [
    "assets/img/banner-header.png",
    "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
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
