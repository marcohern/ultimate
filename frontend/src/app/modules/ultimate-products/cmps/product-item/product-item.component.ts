import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/modules/ultimate-core/models/product';

@Component({
  selector: 'ult-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor() { }

  @Input()
  product:Product = {
    id: 0,
    name: '[Product Name]',
    slug: 'product-slug',
    active: true,
    org_price: 199.95,
    dct_price: 149.95,
  };

  ngOnInit() {
  }

}
