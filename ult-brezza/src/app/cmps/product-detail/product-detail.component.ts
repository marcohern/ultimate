import { Component, OnInit } from '@angular/core';

declare var jQuery;

@Component({
  selector: 'brezza-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (jQuery('#product-zoom').length > 0) {
	
      jQuery('#product-zoom').elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750,
        gallery: 'gallery_01'
      });
    }
    jQuery("#gallery_01 .slider-items").owlCarousel({
      autoplay: false,
      items: 3, //10 items above 1000px browser width
      itemsDesktop: [1024, 3], //5 items between 1024px and 901px
      itemsDesktopSmall: [900, 2], // 3 items betweem 900px and 601px
      itemsTablet: [600, 3], //2 items between 600 and 0;
      itemsMobile: [320, 2],
      navigation: true,
      navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
      slideSpeed: 500,
      pagination: false
    });
  }

}
