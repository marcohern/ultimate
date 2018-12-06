import { Component, OnInit } from '@angular/core';

declare var jQuery;

@Component({
  selector: 'brezza-catslider',
  templateUrl: './catslider.component.html',
  styleUrls: ['./catslider.component.css']
})
export class CatsliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* Category desc slider */
    jQuery("#category-desc-slider .slider-items").owlCarousel({
      autoPlay: true,
      items: 1, //10 items above 1000px browser width
      itemsDesktop: [1024, 1], //5 items between 1024px and 901px
      itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
      itemsTablet: [600, 1], //2 items between 600 and 0;
      itemsMobile: [320, 1],
      navigation: true,
      navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
      slideSpeed: 500,
      pagination: false
    });
  }

}
