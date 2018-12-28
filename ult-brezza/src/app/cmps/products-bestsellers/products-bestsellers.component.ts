import { Component, OnInit } from '@angular/core';
import { Product } from '@marcohern/ultimate-core';
import { ProductService } from '@marcohern/ultimate-products';

declare var jQuery;

@Component({
  selector: 'brezza-products-bestsellers',
  templateUrl: './products-bestsellers.component.html',
  styleUrls: ['./products-bestsellers.component.css']
})
export class ProductsBestsellersComponent implements OnInit {

  constructor(private prs:ProductService) { }

  bestSellers:Product[];

  ngOnInit() {
    this.prs.getProductsMostSold().subscribe(result => {
      this.bestSellers = result;

      jQuery("#bestsell-slider .slider-items").owlCarousel({
        items: 5, //10 items above 1000px browser width
        itemsDesktop: [1024, 4], //4 items between 1024px and 901px
        itemsDesktopSmall: [980, 3], // 4 items betweem 900px and 601px
        itemsTablet: [640, 2], //3 items between 600 and 0;
        itemsMobile: [375, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
      });
    });
  }

}
