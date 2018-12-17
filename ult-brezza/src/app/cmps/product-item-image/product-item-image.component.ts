import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@marcohern/ultimate-core';

@Component({
  selector: 'brezza-product-item-image',
  templateUrl: './product-item-image.component.html',
  styleUrls: ['./product-item-image.component.css']
})
export class ProductItemImageComponent implements OnInit {


  @Input()
  product:Product;

  constructor() { }

  ngOnInit() {
  }

}
