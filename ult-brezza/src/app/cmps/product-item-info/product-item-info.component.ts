import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@marcohern/ultimate-core';

@Component({
  selector: 'brezza-product-item-info',
  templateUrl: './product-item-info.component.html',
  styleUrls: ['./product-item-info.component.css']
})
export class ProductItemInfoComponent implements OnInit {

  rating:number;

  @Input()
  product:Product;

  constructor() { }

  ngOnInit() {
    this.rating = Math.round(Math.random()*20)*5;
  }

}
