import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Product } from '@marcohern/ultimate-core';

@Component({
  selector: '[brezza-product-grid-item]',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.css']
})
export class ProductGridItemComponent implements OnInit {

  @HostBinding('class') uClass:string = 'item col-lg-4 col-md-4 col-sm-4 col-xs-6';

  @Input()
  product:Product;
  
  constructor() { }

  ngOnInit() {
  }

}
