import { Component, OnInit } from '@angular/core';

declare var jQuery;

@Component({
  selector: 'brezza-products-featured',
  templateUrl: './products-featured.component.html',
  styleUrls: ['./products-featured.component.css']
})
export class ProductsFeaturedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      
    /* Featured slider */
    jQuery("#featured-slider .slider-items").owlCarousel({
      items: 4, //10 items above 1000px browser width
      itemsDesktop: [1024, 3], //5 items between 1024px and 901px
      itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
      itemsTablet: [768, 2], //2 items between 600 and 0;
      itemsMobile: [360, 1],
      navigation: true,
      navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
      slideSpeed: 500,
      pagination: false
    });
  }

}
