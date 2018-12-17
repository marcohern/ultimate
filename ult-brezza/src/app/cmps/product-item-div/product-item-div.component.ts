import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '@marcohern/ultimate-core';

@Component({
  selector: '[brezza-product-item-div]',
  templateUrl: './product-item-div.component.html',
  styleUrls: ['./product-item-div.component.css']
})
export class ProductItemDivComponent implements OnInit {


  @HostBinding('class')
  uClass:string = 'item';

  @Input()
  product:Product;

  constructor() { }

  ngOnInit() {
  }

}
