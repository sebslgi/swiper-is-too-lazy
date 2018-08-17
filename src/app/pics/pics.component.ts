import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.scss']
})
export class PicsComponent implements OnInit {
  animalName: string;
  animalImages: string[];

  swiperIndex = 0;
  swiperConfig: SwiperConfigInterface = {
    pagination: {
      el: '.swiper-pagination',
    },
    observer: true,
    preloadImages: false,
    lazy: true,
  };

  @ViewChild(SwiperDirective) swiperDirectiveRef: SwiperDirective;


  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      this.animalName = data.animal.name;
      this.animalImages = data.animal.images;
      this.swiperDirectiveRef.setIndex(0);
      // console.log(this.swiperDirectiveRef);
      // console.log('swiperIndex:', this.swiperIndex);
    });
  }

}
